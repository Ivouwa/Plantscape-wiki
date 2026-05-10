fetch('pagedetails.json')

    .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.json();
    })

    .then(data => {

        // shows data on urlbar
        let urlbar = document.getElementById('urlbar')
        if (urlbar == undefined) {
            console.log("No data for urlbar, skipping")
        } else{
        urlbar.innerHTML=`${data.urlbar}`            
        }

        // sets text next to "plantscape wiki" logo
        let pagename = document.getElementById('pagename')
        if (pagename == undefined) {
            console.log("No data for pagename, skipping")
        } else{
        pagename.innerHTML=`<a href="../" class="page">${data.pagename}`            
        }

        // Name of enemy, curse, etc..
        let output = document.getElementById('name')
        if (output == undefined) {
            console.log("No data for name, skipping")
        } else{
        output.innerHTML=`${data.name}`            
        }

        // Description of enemy, curse, etc..
        // Usually a 1:1 of whats described of it in game
        let description = document.getElementById('description')
        if (description == undefined) {
            console.log("No data for description, skipping")
        } else{
        description.innerHTML=`${data.description}`            
        }

        // Second section title 
        let secondtitle = document.getElementById('secondtitle')
        if (secondtitle == undefined) {
            console.log("No data for secondtitle, skipping")
        } else{
        secondtitle.innerHTML=`${data.secondtitle}`          
        }

        // Third title, can be used for whatever
        let thirdtitle = document.getElementById('thirdtitle')
        if (thirdtitle == undefined) {
            console.log("No data for thirdtitle, skipping")
        } else{
        thirdtitle.innerHTML=`${data.thirdtitle}`            
        }

        let deathmsg = document.getElementById('deathmsg')
        if (deathmsg == undefined) {
            console.log("No data for deathmsg, skipping")
        } else{
        deathmsg.innerHTML=`${data.deathmsg}`            
        }



        
        //Details, can add more if needed.
        let detail1 = document.getElementById('detail1')
        if (detail1 == undefined) {
            console.log("No data for detail1, skipping")
        } else{
        detail1.innerHTML=`${data.detail1}`            
        }

        let detail2 = document.getElementById('detail2')
        if (detail2 == undefined) {
            console.log("No data for detail2, skipping")
        } else{
        detail2.innerHTML=`${data.detail2}`            
        }

        let detail3 = document.getElementById('detail3')
        if (detail3 == undefined) {
            console.log("No data for detail3, skipping")
        } else{
        detail3.innerHTML=`${data.detail3}`            
        }
        
        let detail4 = document.getElementById('detail4')
        if (detail4 == undefined) {
            console.log("No data for detail4, skipping")
        } else{
        detail4.innerHTML=`${data.detail4}`            
        }

        let detail5 = document.getElementById('detail5')
        if (detail5 == undefined) {
            console.log("No data for detail5, skipping")
        } else{
        detail5.innerHTML=`${data.detail5}`            
        }




        // staying a const because this must be in your page.
        const footer = document.getElementById('footer')
        footer.innerHTML = `

        Made by Ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki">Want to contribute? View the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX">Join the plantscape server</a>
        
        `
    })
    
    /*


    let nameofelement = document.getElementById('nameofelement')
        if (nameofelement == undefined) {
            console.log("No data for nameofelement, skipping")
        } else{
        nameofelement.innerHTML=`${data.nameofelement}`            
        }

 
    
    ^ if you want to add a new text element, assign the id "nameofelement" to it then in the json add "nameofelement": "elementdetails"

    */