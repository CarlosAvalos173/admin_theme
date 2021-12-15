<template>
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Registro de Ventas</h1>
        </div>
        <!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <router-link class="breadcrumb-item" to="/">Home</router-link>
            <li class="breadcrumb-item active">Registro de Ventas</li>
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
              <h3 class="card-title">Registro de Ventas</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>RFC</th>
                      <th>Nombre(s)</th>
                      <th>Apellido(s)</th>
                      <th>Dirección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="client in clients" :key="client.RFC">
                      <td>{{ client.RFC }}</td>
                      <td>{{ client.name }}</td>
                      <td>{{ client.last_name }}</td>
                      <td>{{ client.address }}</td>
                      <td class="align-middle">
                        <div class="btn-toolbar">
                          <button
                            class="btn btn-primary btn-sm"
                            v-on:click="showClientDetails(client)"
                          >
                            <i class="fas fa-ellipsis"></i>
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
let url = "http://localhost:8000/api/clients";
let Swal = require("sweetalert2");

export default {
  name: "clients",
  data() {
    return {
      clients: [],
    };
  },
  created() {
    this.getclients();
  },
  methods: {
    getclients() {
      this.axios.get(url).then((response) => {
        this.clients = response.data;
      });
    },
    //Te amo miamor :3c. Implementacion de que me metas la verga pendiente.
    showclientDetails(id) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "info",
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
  },
};
</script>
