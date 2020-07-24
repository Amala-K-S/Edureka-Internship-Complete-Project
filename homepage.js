class restaurantManager{
    constructor(){
        this.restaurantList=[
        {Name:'Abc bakery',Address:"24 lucky street,Kochi",City:'Kochi'},
        {Name:'Aarav bakery',Address:"31 PR Road,Chennai",City:'Chennai'},
        {Name:'Foody Point',Address:"45 Sun Street,Mumbai",City:'Mumbai'},
        {Name:'Take your Food',Address:"17 lucky street,Kochi",City:'Kochi'},
        {Name:'Hello yummy',Address:"35 RP street,Mumbai",City:'Mumbai'},
        {Name:'Sunny bakery',Address:"67 PR Road,Chennai",City:'Chennai'},
        {Name:'The Only Place',Address:"13, Museum Road, Behind Post Office, Bengaluru",City:'Bangalore'},
        {Name:'Truffles Koramangala',Address:"93/A , Ground Floor , A Wing ,4th B Cross, 5th Block, Koramangala, Bengaluru",City:'Bangalore'}
    ]
 }
 printAllRestaurantNames(){
    var i;
    for(i=0;i<this.restaurantList.length;i++){
        console.log(this.restaurantList[i].Name+"\n"+this.restaurantList[i].Address+"\n"+this.restaurantList[i].City);
    }
 }   
 filterRestaurantByCity(city){
     var i,flag=0;
     city=city.charAt(0).toUpperCase()+city.slice(1);
     console.log("Restaurants at "+city);
     for(i=0;i<this.restaurantList.length;i++){
         if(this.restaurantList[i].City==city){
             flag=1;
            console.log(this.restaurantList[i].Name+"\n"+this.restaurantList[i].Address+"\n"+this.restaurantList[i].City);
         }
     }
     if(flag==0){
         console.log('No details of restaurants in this city');
     }
 } 
}
function click1(){
    var restaurant=new restaurantManager();
    console.log("Details of all restaurants\n");
    restaurant.printAllRestaurantNames();
}
function click2()
{
    var restaurant=new restaurantManager();
    var i1=document.getElementById('input1').value;
    restaurant.filterRestaurantByCity(i1);
}
