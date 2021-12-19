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
              <h3 class="card-title">Tickets</h3>
            </div>
            <div class="card-header">
              <button
                class="btn btn-primary btn-sm bg-green"
                v-on:click="addTicket"
                style="right-margin: 20px"
              >
                <i class="fas fa-plus"></i>
                Add Ticket
              </button>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Descripción</th>
                      <th>Total</th>
                      <th>fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ticket in tickets" :key="ticket.id">
                      <td>{{ ticket.id }}</td>
                      <td>{{ ticket.description }}</td>
                      <td>${{ ticket.total }}</td>
                      <td>
                        {{ new Date(ticket.updated_at) }}
                      </td>
                      <td class="align-middle">
                        <div class="btn-toolbar">
                          <button
                            class="btn btn-primary btn-sm"
                            v-on:click="showSaleDetails(sale)"
                          >
                            <i class="far fa-file-search"></i>
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
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Sales</h3>
            </div>
            <div class="card-header">
              <button
                class="btn btn-primary btn-sm bg-green"
                v-on:click="addSale"
                style="right-margin: 20px"
              >
                <i class="fas fa-plus"></i>
                Add sale
              </button>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="table-responsive">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ID producto</th>
                      <th>Cantidad</th>
                      <th>Precio Individual</th>
                      <th>Total</th>
                      <th>ID Ticket</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="sale in sales" :key="sale.id">
                      <td>{{ sale.id }}</td>
                      <td>{{ sale.product_id }}</td>
                      <td>{{ sale.quantity }}</td>
                      <td>{{ sale.individual_price }}</td>
                      <td>${{ sale.total }}</td>
                      <td>
                        {{ sale.sale_header_id }}
                      </td>
                      <td class="align-middle">
                        <div class="btn-toolbar">
                          <button
                            class="btn btn-primary btn-sm"
                            v-on:click="showSaleDetails(sale)"
                          >
                            <i class="far fa-file-search"></i>
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
let url_tickets = "/sale-headers";
let url_sales = "/sales";
let Swal = require("sweetalert2");

export default {
  name: "Sales",
  data() {
    return {
      tickets: [],
      sales: [],
    };
  },
  created() {
    this.getTickets();
    this.getSales();
  },
  methods: {
    getTickets() {
      this.axios.get(url_tickets).then((response) => {
        this.tickets = response.data;
      });
    },
    getSales() {
      this.axios.get(url_sales).then((response) => {
        this.sales = response.data;
      });
    },
    addTicket() {
      Swal.fire({
        title: "Add Ticket",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Descripción">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Total">',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      }).then((result) => {
        if (result.value) {
          this.axios
            .post(url_tickets, {
              description: result.value[0],
              total: result.value[1],
            })
            .then(() => {
              this.getTickets();
              Swal.fire("Ticket Added", "", "success");
            });
        } else {
          Swal.fire("Cancelled", "", "error");
        }
      });
    },
    addSale() {
      Swal.fire({
        title: "Add Sale",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="ID Producto">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Cantidad">' +
          '<input id="swal-input3" class="swal2-input" placeholder="Precio Individual">' +
          '<input id="swal-input4" class="swal2-input" placeholder="ID Ticket">',
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
            .post(url_sales, {
              product_id: result.value[0],
              quantity: result.value[1],
              individual_price: result.value[2],
              total: result.value[1] * result.value[2],
              sale_header_id: result.value[3],
            })
            .then(() => {
              this.getSales();
              Swal.fire("Sale Added", "", "success");
            });
        } else {
          Swal.fire("Cancelled", "", "error");
        }
      });
    },
  },
};
</script>
