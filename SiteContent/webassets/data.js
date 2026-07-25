fetch('pagedetails.json')

    .then(response => {
        if (!response.ok) throw new Error("JSON not found!");
        return response.json();
    })

    .then(data => {
    let theme = data.theme;
    let htmlcontainer = document.getElementById('htmlcontainer')

    if (true == true) {
    htmlcontainer.innerHTML += `

    <body class="${theme}border">


        <topbar class="topbar">

                <div class="logo">

                    <a href="../Home/">
                        <img src="${backtrack}webassets/${theme}logo.png" class="icon">
                    </a>

                </div>

                <div class="page" id="pagename"></div>
                
                <div class="${theme}border">

                        <img src="./icon.png" class="icon"> 

                </div>

        </topbar>


        <detail class="detail" id="detail">
        

        </detail>


    </body>
    `}

    let details = document.getElementById('detail');

    



        // inserts layout, with themeing rules



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
        pagename.innerHTML=`<a onclick="history.back()" class="page">${data.pagename}`            
        }


        

    // Section 1
   
        let s1t1 = data.s1t1
        if (s1t1 == undefined){
            console.log("No data found for Section 1 Title 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s1t1}</div>`
        }

        let s1d1 = data.s1d1
        if (s1d1 == undefined){
            console.log("No data found for Section 1 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s1d1}</div>`
        }


    // Section 2

        let s2t1 = data.s2t1
        if (s2t1 == undefined){
            console.log("No data found for Section 2 Title 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s2t1}</div>`
        }


        let s2d1 = data.s2d1
        if (s2d1 == undefined){
            console.log("No data found for Section 2 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d1}</div>`
        }
        
        let s2d2 = data.s2d2
        if (s2d2 == undefined){
            console.log("No data found for Section 2 Detail 2, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d2}</div>`
        }

        let s2d3 = data.s2d3
        if (s2d3 == undefined){
            console.log("No data found for Section 2 Detail 3, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d3}</div>`
        }
        
        let s2d4 = data.s2d4
        if (s2d4 == undefined){
            console.log("No data found for Section 2 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d4}</div>`
        }

        // section three
        
        let s3t1 = data.s3t1
        if (s3t1 == undefined){
            console.log("No data found for Section 2 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s3t1}</div>`
        }
        

        let s3d1 = data.s3d1
        if (s3d1 == undefined){
            console.log("No data found for Section 3 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s3d1}</div>`
        }

        let s3d2 = data.s3d2
        if (s3d2 == undefined){
            console.log("No data found for Section 3 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s3d2}</div>`
        }

        // section three
        
        let s4t1 = data.s4t1
        if (s4t1 == undefined){
            console.log("No data found for Section 2 Detail 1, skipping element.")  
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s4t1}</div>`
        }







        
        
        if (extra){
            htmlcontainer.innerHTML += `${extra} <div></div>`
        } else {
            
        }
        
        htmlcontainer.innerHTML += `
        <footer id="footer">

        Made by Ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki" target="_blank" rel="noopener noreferrer">Want to contribute? View the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX" target="_blank" rel="noopener noreferrer">Join the plantscape server</a>
        
        </footer>
        `
    })
    
