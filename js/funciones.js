const app = Vue.createApp({
    data(){
        return{
            muebles:[] 
        };
    },
    methods:{
        cargarMuebles(){
            axios.get("https://www.course-api.com/react-store-products").then(response=>{
                    this.muebles=response.data.map(mueble=>({
                        ...mueble,
                        selectedColor: null 
                    }));
                })
        },
        seleccionarColor(mueble,color){
            mueble.selectedColor=color; 
        }
    },
    created() {
        this.cargarMuebles(); 
    }
});
app.mount("#contenedor");