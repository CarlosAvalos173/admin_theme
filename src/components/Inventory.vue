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
              <h3 class="card-title">Inventory table </h3>
              <button class="btn btn-primary btn-sm" @click="addItem()" style="right-margin:20px" data-toggle="modal" data-target="#addItem">
                <i class="fas fa-plus"></i>
                Add Item
              </button>
            </div>
            <div class="card-header">
              <div>
                <!-- <router-link
                  :to="{ name: 'createProduct' }"
                  class="btn btn-primary"
                >
                  <i class="fas fa-plus-circle"> </i>
                  Add Item
                </router-link> -->
              </div>
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
                          <router-link
                            :to="{
                              name: 'editProduct',
                              params: { id: item.id },
                            }"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="fas fa-edit"> </i>
                          </router-link>
                          <button
                            class="btn btn-danger btn-sm"
                            @click="deleteItem(item.id)"
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

<!-- Definicion de Modal como formulario para captura de datos -->
      <div class="modal fade" id="addItem" aria-labelledby="addItemLabel" tabindex="-1">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addItemLabel">Añadir Objeto</h5>
            </div>
            <div class="modal-body">
          
            </div>
          </div>        
        </div>
      
      </div>

      </div>
    </div>
  </section>

</template>


<script>

let url = 'http://localhost:8000/api/products';

export default {
  name: "Inventory",
  data() {
    return {
      items: [
        // {
        //   id: 1,
        //   name: "Herramienta",
        //   price: "8.00",
        //   quantity: "123",
        //   description: "Herramienta básica para la elaboración de productos",
        // },
      ],
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
      this.axios
        .post(url, {
          name: this.name,
          price: this.price,
          stock: this.stock,
          description: this.description,
        })
        .then((response) => {
          this.items.push(response.data);
          this.name = "";
          this.price = "";
          this.stock = "";
          this.description = "";
        });
        /*
        addItem2: async function()
    {
      const{value: formvalues} = await this.$swal.fire({
        title:'Añadir',
        html:'',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Gurdar',
        cancelButtonColor:'#3085d6',
        preConfirm: () =>{
          return[]
        }
      })*/
    },
  },
};
</script>
