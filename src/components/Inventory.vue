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
                      <td>{{ item.quantity }}</td>
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
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Inventory",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Herramienta",
          price: "8.00",
          quantity: "123",
          description: "Herramienta básica para la elaboración de productos",
        },
      ],
    };
  },
};
</script>
