<template>
  <sidebar-menu
    v-model:collapsed="collapsed"
    :menu="menu"
    :theme="selectedTheme"
    :show-one-child="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />
  <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />
  <div
    id="main-menu"
    :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]"
  >
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log("onToggleCollapse");
      console.log(collapsed);
    },
    onItemClick(event, item) {
      console.log("onItemClick");
      console.log(event);
      console.log(item);
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
  },
  data() {
    return {
      menu: [
        {
          header: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
        },
        {
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/blank",
              title: "Sub Link",
            },
          ],
        },
        {
          href: "/inventory",
          title: "Inventario",
          icon: "fas fa-boxes",
        },
        {
          href: "/sales",
          title: "Registro de Ventas",
          icon: "fas fa-cash-register",
        },
        {
          href: "/movements",
          title: "Movimientos",
          icon: "fas fa-exchange-alt",
        },
        {
          href: "/clients",
          title: "Clientes",
          icon: "fas fa-user",
        },
        {
          href: "/providers",
          title: "Proveedores",
          icon: "fas fa-people-carry",
        },
        {
          href: "/cashiers",
          title: "Cajeros ඞ",
          icon: "fas fa-users",
        },
        {
          href: "/bulk_importer",
          title: "Importador de Datos",
          icon: "fas fa-upload",
        },
      ],
      collapsed: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}

#main-menu {
  padding-left: 290px;
  transition: 0.3s ease;
}
#main-menu.collapsed {
  padding-left: 65px;
}
#main-menu.onmobile {
  padding-left: 65px;
}
.container {
  width: auto;
  color: white;
}
</style>

