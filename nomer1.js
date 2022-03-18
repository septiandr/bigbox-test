var customers = [
  {'id':1,'nama':'Eri','alamat':"jln graha jati no 15"},
  {'id':2,'nama':'Akbar','alamat':"jln dipati uku no 15"}
];
var products = [
  {'id':1,'product_name':'Baju','price':100000},
  {'id':2,'product_name':'Celana','price':150000}
];
var transactions = [
  {'id':1,'customers_id':1,'product_id':1,'purchase_date':'2021-05-24','quantity':2},
  {'id':2,'customers_id':1,'product_id':2,'purchase_date':'2021-05-24','quantity':1},
  {'id':1,'customers_id':2,'product_id':1,'purchase_date':'2021-05-23','quantity':2},
];

//pertanyaan
//dengan data yang telah dibuat diatas buatlah sebuah variable array sehingga data tersebut berisi seperti pada file output.json atau gambar 2
//jawaban
var arr1 = customers.map(function(cus) {
  const trans = transactions.filter((t)=>t.customer_id==cus.id).map((trans)=>{return{
          id:trans.id,
          product_id: products.find(function(prod) {
            return prod.id == trans.product_id;
            }),
          purchase_date: trans.purchase_date,
          quantity: trans.quantity
        }
      })
  var arrayToString = JSON.stringify(trans)
    return {
        id: cus.id,
        nama:cus.nama,
        alamat : cus.alamat,
        transaction:arrayToString
    }
});
console.log(arr1)