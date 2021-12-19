<template>
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Inventory</h1>
        </div>
        <!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <router-link class="breadcrumb-item" to="/">Home</router-link>
            <li class="breadcrumb-item active">Inventory</li>
          </ol>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Inventory table</h3>
            </div>
            <div class="card-header">
              <button
                class="btn btn-primary btn-sm bg-green"
                v-on:click="addItem"
                style="right-margin: 20px"
              >
                <i class="fas fa-plus"></i>
                Add Item
              </button>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.stock }}</td>
                      <td>{{ item.description }}</td>
                      <td class="align-middle">
                        <div class="btn-toolbar">
                          <button
                            class="btn btn-primary btn-sm"
                            v-on:click="editItem(item)"
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            class="btn btn-danger btn-sm"
                            v-on:click="deleteItem(item.id)"
                          >
                            <i class="fas fa-trash"> </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
let url = "/products";
let Swal = require("sweetalert2");

export default {
  name: "Inventory",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.axios.get(url).then((response) => {
        this.items = response.data;
      });
    },
    addItem() {
      Swal.fire({
        title: "Añadir Objeto",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
          '<input id="swal-input2" class="swal2-input" type="number" placeholder="Precio">' +
          '<input id="swal-input3" class="swal2-input" type="number" placeholder="Cantidad">' +
          '<input id="swal-input4" class="swal2-input" placeholder="Descripción">',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
          ];
        },
      }).then((result) => {
        if (result.value) {
          this.axios
            .post(url, {
              name: result.value[0],
              price: result.value[1],
              stock: result.value[2],
              description: result.value[3],
            })
            .then(() => {
              this.getItems();
              this.name = "";
              this.price = "";
              this.stock = "";
              this.description = "";
            });
          Swal.fire("Añadido!", "El objeto ha sido añadido.", "success");
        } else {
          Swal.fire("Cancelado", "El objeto no ha sido añadido.", "error");
        }
      });
    },
    deleteItem(id) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrarlo!",
      }).then((result) => {
        if (result.value) {
          this.axios.delete(url + "/" + id).then(() => {
            this.getItems();
            Swal.fire("Borrado!", "El objeto ha sido borrado.", "success");
          });
        }
      });
    },
    editItem(item) {
      Swal.fire({
        title: "Editar Objeto",
        html:
          '<input id="swal-input1" class="swal2-input" value="' +
          item.name +
          '">' +
          '<input id="swal-input2" class="swal2-input" type="number" value="' +
          item.price +
          '">' +
          '<input id="swal-input3" class="swal2-input" type="number" value="' +
          item.stock +
          '">' +
          '<input id="swal-input4" class="swal2-input" value="' +
          item.description +
          '">',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
          ];
        },
      }).then((result) => {
        if (result.value) {
          this.axios
            .put(url + "/" + item.id, {
              name: result.value[0],
              price: result.value[1],
              stock: result.value[2],
              description: result.value[3],
            })
            .then(() => {
              this.getItems();
              this.name = "";
              this.price = "";
              this.stock = "";
              this.description = "";
            });
          Swal.fire("Editado!", "El objeto ha sido editado.", "success");
        } else {
          Swal.fire("Cancelado", "El objeto no ha sido editado.", "error");
        }
      });
    },
  },
};
</script>
