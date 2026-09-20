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

    // sets the url bar text (ie "Plantscape wiki - ivouwa class")
    let urlbar = document.getElementById('urlbar')
    if (urlbar) {
        urlbar.innerHTML=`${data.urlbar}` 
    }

    // sets container point
    let htmlcontainer = document.getElementById('htmlcontainer')

    // inserts body into container
    if (htmlcontainer) {
    htmlcontainer.innerHTML += `

        <body class="${theme}border" id="bodycontainer">

            <topbar class="topbar" id="topbar">

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
        console.log(`Backtrack: ${backtrack}, Theme: ${theme}, Pagename: ${data.pagename}`)
    }  
    
    }else{
        console.error("No html container found for insert, did you add the id \"htmlcontainer\" to the <html> header?")
    }
    
    // define the details container    
    let details = document.getElementById('detail');
    
    
    
    //detail inserter function, so i can add unlimited details to each section
    function detailinserts(section, insertpoint){
        
        for (let i = 1; ;i++){
            
            let indextype = `s${section}d${i}`

            if (data[indextype] != undefined){

                insertpoint.innerHTML += `
                    <div>${data[indextype]}</div>
                `  
                if (debuglevel == 1){
                    console.log("Element", indextype, "Loaded.")
                }

            }else{

                break

            }
         
        }

    }

    // insterts the title if it exists along with loading the section and making it collapsable and whatnot
    function section(number){
        
        let datapoint = `s${number}t1`
        let collapsabledata = `s${number}c`
        
        if (data[collapsabledata] != undefined && data[collapsabledata] == "true"){
            
            details.innerHTML += `
            <Details id="expandable${number}">
                <Summary>
                    <div class="${data.theme}title">${data[datapoint]}</div>
                </Summary>
            `
            
            if (debuglevel == 1){
                console.log("Section ", number, " is collapsable")
            }
            
            let collapsedetailsinsert = document.getElementById(`expandable${number}`)
            
            detailinserts(number, collapsedetailsinsert)  
            
        }else if (data[datapoint] != undefined){
            
            details.innerHTML += `
            <div class="${data.theme}title">${data[datapoint]}</div>
            `
            
            detailinserts(number, details)
            
            
        }
        
    }
   
    for (let i = 1; ; i++){

        let numthing = `s${i}t1`

        if (data[numthing]){

            if (debuglevel == 1){
                console.log("Function for section", i ,"Has been called.")
            }

            section(i)

        }else{

            if (debuglevel == 1){
                console.log("No more sections to load")
            }

            break

        }
        
    }   

    try{

        if (extra) {
                
            if (debuglevel == 1) {
                console.log("Extra defined, loading extra elements")
            }

            // checks if the extra thing in json is there
            if (data.extra){
                details.innerHTML += `<div class="title"> ${data.extra} </div>`
            }else{
                if (debuglevel == 1) {
                console.log("Extra title json not defined but Extra is, skipping over title.")
                } 
            }
                
            details.innerHTML += `${extra}`
                
            }else if (extra == false, debuglevel == 1){

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

    }
)
    
