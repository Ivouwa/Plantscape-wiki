// ONLY CURSE / ENEMY / UPGRADES / ETC PAGES SHOULD BE USING THIS JS!
// WHEN MAKING A REDIRECT PAGE (/enemies /home /curses) WRITE EVERYTHING DIRECTLY!
// thank yous!


let debuglevel = 1
// 1 = logs everything
// anything else will only show errors and such in the console
// set this to 0 when making a commit!!

fetch('pagedetails.json')

    .then(response => {
        if (!response.ok) throw Error("JSON not found, do you have a pagedetails.json?");
        return response.json();
    })

    .then(data => {

    // grabs theme
    let theme = data.theme;
    if (debuglevel == 1) {
        console.log("The current theme is set to :", data.theme)
    }

    
    // sets the url bar text (ie "Plantscape wiki - ivouwa class")
    let urlbar = document.getElementById('urlbar')
    if (urlbar) {
        urlbar.innerHTML=`${data.urlbar}` 
    }

    if (debuglevel == 1) {
        console.log("The urlbar has been set to :", data.urlbar)
    }


    // sets container point
    let htmlcontainer = document.getElementById('htmlcontainer')

    // inserts body into container
    if (htmlcontainer) {
    htmlcontainer.innerHTML += `

    <body class="${theme}border" id="bodycontainer">


        <topbar class="topbar">

                <div class="logo">

                    <a href="${backtrack}Home/">
                        <img src="${backtrack}webassets//logoicons/${theme}logo.png" class="icon">
                    </a>
              </div>

                <div class="page">
                    <a onclick="history.back()" class="page">${data.pagename}</a>
                </div>
                
                <div class="${theme}border">

                        <img src="./icon.png" class="icon"> 

                </div>

        </topbar>


        <detail class="detail" id="detail">
        

        </detail>


    </body>
    `
    if (debuglevel == 1) {
        console.log("The html has been inserted into the htmlcontainer.")
        console.log(`Backtrack : ${backtrack}, Theme: ${theme}, Pagename, ${data.pagename}`)
    }  
    
    }else{
        console.error("No html container found for insert, did you add the id \"htmlcontainer\" to the <html> header?")
    }

    
    


    
    // define the details container    
    let details = document.getElementById('detail');

    let unloaded = "";

    // Section 1
   
        let s1t1 = data.s1t1
        if (s1t1 == undefined){
            unloaded += "s1t1, "
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s1t1}</div>`
        }

        let s1d1 = data.s1d1
        if (s1d1 == undefined){
            unloaded += "s1d1, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s1d1}</div>`
        }


    // Section 2

        let s2t1 = data.s2t1
        if (s2t1 == undefined){
            unloaded += "s2t1, "   
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s2t1}</div>`
        }


        let s2d1 = data.s2d1
        if (s2d1 == undefined){
            unloaded += "s2d1, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d1}</div>`
        }
        
        let s2d2 = data.s2d2
        if (s2d2 == undefined){
            unloaded += "s2d2, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d2}</div>`
        }

        let s2d3 = data.s2d3
        if (s2d3 == undefined){
            unloaded += "s2d3, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d3}</div>`
        }
        
        let s2d4 = data.s2d4
        if (s2d4 == undefined){
            unloaded += "s2d4, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d4}</div>`
        }

        let s2d5 = data.s2d5
        if (s2d5 == undefined){
            unloaded += "s2d5, "   
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d5}</div>`
        }

        let s2d6 = data.s2d6
        if (s2d6 == undefined){
            unloaded += "s2d6, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d6}</div>`
        }

        let s2d7 = data.s2d7
        if (s2d7 == undefined){
            unloaded += "s2d7, " 
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d7}</div>`
        }


        let s2d8 = data.s2d8
        if (s2d8 == undefined){
            unloaded += "s2d8, "  
        }
        else {
            details.innerHTML += `<div class="subtitle">${s2d8}</div>`
        }



        // section three
        
        let s3t1 = data.s3t1
        if (s3t1 == undefined){
           unloaded += "s3t1, "   
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s3t1}</div>`
        }
        

        let s3d1 = data.s3d1
        if (s3d1 == undefined){
            unloaded += "s3d1, "    
        }
        else {
            details.innerHTML += `<div class="subtitle">${s3d1}</div>`
        }

        let s3d2 = data.s3d2
        if (s3d2 == undefined){
            unloaded += "s3d2, " 
        }
        else {
            details.innerHTML += `<div class="subtitle">${s3d2}</div>`
        }

        // section four
        
        let s4t1 = data.s4t1
        if (s4t1 == undefined){
            unloaded += "s4t1, "    
        }
        else {
            details.innerHTML += `<div class="${theme}title">${s4t1}</div>`
        }

        let s4d1 = data.s4d1
        if (s4d1 == undefined){
            unloaded += "s4d1, " 
        }
        else {
            details.innerHTML += `<div class="subtitle">${s4d1}</div>`
        }






        if (debuglevel == 1) {
            console.log("The following sections, titles, and details have not been loaded! : ", unloaded)
        } 



        try{
            if (extra) {
                
                if (debuglevel == 1) {
                    console.log("Extra defined, loading extra elements")
                }

                if (data.extra){
                    details.innerHTML += `<div class="title"> ${data.extra} </div>`
                }else{
                    if (debuglevel == 1) {
                    console.log("Extra title json not defined but Extra is, skipping over title.")
                    } 
                }
                
                details.innerHTML += ` 
                ${extra} 
                `
                
            } else if (extra == false, debuglevel == 1){
                console.log("Extra set to false, not loading elements.")
            }
        }catch(error){
            if (debuglevel == 1){
                console.log("Extra has errored, forcing unloaded under assumption of no false variable and showing error below.")
                console.error(error) 
            }
        }

        try{

            


            if (media) {

                
                details.innerHTML += `
                
                <div class="${theme}title"> Related Media </div>
                <div id="mediacontainer"></div>
                
                `

                let mediacontainerforinsert = document.getElementById("mediacontainer")
                
                for(let i = 0; i < media.length; i += 3){
                    
                    let testins = media[i + 1]
                    let Description = media[i + 2]
                    mediacontainerforinsert.innerHTML += `
                    
                    <div class="nopaddingdiv">

                        <div class="${theme}border">
                            <${media[i]} controls src="${testins}" class="mediaimg"></${media[i]}>
                        </div>
                            
                        <div class="${theme}border">
                            ${Description}
                        </div>    
                    
                    </div>                    
                    `
                }

                if (debuglevel == 1) {
                console.log("Loaded media elements!")
                } 
                


            } else if (media == false, debuglevel == 1){
                console.log("media set to false, not loading elements.")
            }
        }catch(error){

            if (debuglevel == 1){
                console.log("Media has errored, forcing unloaded under assumption of no false variable and showing error below.")
                console.error(error) 
            }
        }
        
        
        
        if (htmlcontainer) {
        htmlcontainer.innerHTML += ` 
        <footer id="footer">

        Made by ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki" target="_blank" rel="noopener noreferrer">Want to contribute? View the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX" target="_blank" rel="noopener noreferrer">Join the plantscape server</a>
        
        </footer>
        `

        if (debuglevel == 1) {
            console.log("Footer insterted")
        } 
        }
    })
    
