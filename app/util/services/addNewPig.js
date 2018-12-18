var db = connect("127.0.0.1:27017/suin");
var porcoCollection = db.getCollection('porco');

var pigs = [
    { 
        data_entrada: "04/09/2017",
        idade : "438",
        numero : "213302429761",
        peso : "115",
        tipo: "MATRIZ",
        partos: [ {"17/12/2018": "13"} ],
        cio: "0" 
    },
    { 
        data_entrada: "09/09/2017",
        idade : "438",
        numero : "213324298616",
        peso : "113",
        tipo: "MATRIZ",
        partos: [ {"17/12/2018": "5"} ],
        cio: "0" 
    }, { 
        data_entrada: "03/07/2017",
        idade : "438",
        numero : "216382429761",
        peso : "105",
        tipo: "MATRIZ",
        partos: [ {"11/10/2018": "10"} , {"17/12/2018": "11"} ],
        cio: "0" 
    }, { 
        data_entrada: "04/09/2017",
        idade : "438",
        numero : "213329297615",
        peso : "115",
        tipo: "MATRIZ",
        partos: [ {"16/11/2018": "12"}, {"17/12/2018": "10"} ],
        cio: "0" 
    }, { 
        data_entrada: "04/09/2017",
        idade : "438",
        numero : "213024297617",
        peso : "115",
        tipo: "MATRIZ",
        partos: [ {"17/12/2018": "13"} ],
        cio: "0" 
    }, { 
        data_entrada: "04/09/2017",
        idade : "438",
        numero : "293324297615",
        peso : "115",
        tipo: "MATRIZ",
        partos: [ {"17/12/2018": "4"} ],
        cio: "0" 
    }
]


for(var i=0; i<pigs.length; i++){
    var object = porcoCollection.insertOne(pigs[i]);
    print("Saved pig");	
}
