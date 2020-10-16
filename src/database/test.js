const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
    /* Inserir dados na tabela */
       await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "99312831321",
        images: [ 
            "https://images.unsplash.com/photo-1600711725615-d7dfb2215244?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas das 8h até 18h",
        open_on_weekends: "0"
    })  


    /* Consultar dados na tabela */
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    /* Consultar somente 1 orphanato, pelo ID */
     const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage) 

    /* Deletar dado da tabela */
    //console.log(await db.run("DELETE FROM orphanages WHERE id='3'"))
    
}) 