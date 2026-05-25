fetch('pagedetails.json')

    .then(response => {
        if (!response.ok) throw new Error("JSON not found!");
        return response.json();
    })

    .then(data => {

        // shows data on urlbar -- errors because this must be in the page
        let urlbar = document.getElementById('urlbar')
        if (urlbar == undefined) {
            console.error("No data for urlbar!")
        } else{
        urlbar.innerHTML=`${data.urlbar}`            
        }

        // sets text next to "plantscape wiki" logo
        let pagename = document.getElementById('pagename')
        if (pagename == undefined) {
            console.error("No data for pagename!")
        } else{
        pagename.innerHTML=`<a href="../" class="page">${data.pagename}`            
        }

        // Titles, can add more if needed
        let title1 = document.getElementById('title1')
        if (title1 == undefined) {
            console.log("No data for title1, skipping")
        } else{
        title1.innerHTML=`${data.title1}`            
        }

        let title2 = document.getElementById('title2')
        if (title2 == undefined) {
            console.log("No data for title2, skipping")
        } else{
        title2.innerHTML=`${data.title2}`          
        }

        let title3 = document.getElementById('title3')
        if (title3 == undefined) {
            console.log("No data for title3, skipping")
        } else{
        title3.innerHTML=`${data.title3}`            
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


        let detail6 = document.getElementById('detail6')
        if (detail6 == undefined) {
            console.log("No data for detail6, skipping")
        } else{
        detail6.innerHTML=`${data.detail6}`            
        }




        // staying a const because this must be in your page.
        // Keep footer as "----------" in the json! if it's undefined it will error
        const footer = document.getElementById('footer')
        if (footer == undefined) {
            console.error("Possible data error!")
        }
        footer.innerHTML = `

        Made by Ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki" target="_blank" rel="noopener noreferrer">Want to contribute? View the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX" target="_blank" rel="noopener noreferrer">Join the plantscape server</a>
        
        `
    })
    
    /*


    let nameofelement = document.getElementById('nameofelement')
        if (nameofelement == undefined) {
            console.log("No data for nameofelement, skipping")
        } else{
        nameofelement.innerHTML=`${data.nameofelement}`            
        }

 
    
    ^   if you want to add a new text element, assign the id "nameofelement" to an html element
        in the json add "nameofelement": "elementdetails",
        then replace every "nameofelement" in this example to whatever you choose


    */