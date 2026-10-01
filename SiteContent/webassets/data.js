// ONLY CURSE / ENEMY / UPGRADES / ETC PAGES SHOULD BE USING THIS JS!
// WHEN MAKING A REDIRECT PAGE (/enemies /home /curses) WRITE EVERYTHING DIRECTLY!
// thank yous!

let debuglevel = 1

// 1 = logs everything
// anything else will only show errors and such in the console

/*

JS TASK LIST:

    - improve the banner system to support more than one banner at a time

    - improve the curse section so if needed the directory can be customized
        ^ this is becuase the sfoth pages are broken right now.

*/

fetch('pagedetails.json')   

.then(response => {
    if (!response.ok) throw Error("JSON not found, do you have a pagedetails.json?");
    return response.json();
})

.then(data => {

        // evil functions of dooom
        
        // inserts the title if it exists along with loading the section and making it collapsable and whatnot
        function section(number){
            
            let sectiondata = `s${number}t1`
            let collapsabledata = `s${number}c`
            
            if (data[collapsabledata] != undefined && data[collapsabledata] == true){
            
                details.innerHTML += `
                <Details id="expandable${number}">
                    <Summary>
                        <div class="${data.theme}title">${data[sectiondata]}</div>
                    </Summary>
                `
                
                if (debuglevel == 1){
                    console.log("Section ", number, " is collapsable")
                }
                
                let collapsedetailsinsert = document.getElementById(`expandable${number}`)
                
                detailinserts(number, collapsedetailsinsert)  
                
            }else if (data[sectiondata] != undefined){

                details.innerHTML += `
                 <div class="${data.theme}title" id="${sectiondata}"> ${data[sectiondata]}</div>
                `

                detailinserts(number, details)
                
            }

        }

        //detail inserter function, unlimited details can be added to each section
        function detailinserts(section, insertpoint){
            
            for (let i = 1; ;i++){
                
                let detaildata = `s${section}d${i}`
        
                if (data[detaildata] != undefined){
                    
                    insertpoint.innerHTML += `
                        <div id="${detaildata}">${data[detaildata]}</div>
                    `  
        
                    if (debuglevel == 1){
                        console.log("Element", detaildata, "has been loaded.")
                    }
        
                }
                else{
        
                    break
        
                }
            
            }
        
        }

        // gets and returns the theme value of the appointed inputfile
        // curseinserpoint is used to assign an id to each box so that way they're not unsorted when they take time to load.
        async function loadcursejsondata(inputfile, curseinsertpoint,) {
            
                const response = await fetch(`${inputfile}/pagedetails.json`)
                const data = await response.json()
                let curse = document.getElementById(`curseid${curseinsertpoint}`)
                
                curse.innerHTML += `
                
                    <div class="sel${data.theme}border">
                        <a href="${inputfile}">
                            <img class="icon" src="${inputfile}/icon.webp">
                        </a>
                    </div>
                    
                `
                
        }

        // grabs theme
        let theme = data.theme;

        //backtrack detection stuff
        let backtrack = "" 
        let url = new URL(window.location.href)
        let amt = url.pathname.split("/").length-3
        for (let i = 1; ; i++){
            
            backtrack = backtrack += "../"            
            if (i == amt){
                break
            }
        }

        // sets the url bar text (ie "Plantscape wiki - ivouwa class")
        let urlbar = document.getElementById('urlbar')
        if (urlbar) {
            urlbar.innerHTML=`${data.urlbar}` 
        }

        // put stuff into the html container
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

                    <div id="bannercontainer" class="containerdiv"></div>

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

        // gets and returns the input file from the bannerdata.json (in /webassets/banners/)
        async function loadbannerjsondata(inputfile, datapoint,) {
                    
            const response = await fetch(`${inputfile}`)
            const data = await response.json()
            return data;
        
        }

        // places the banner details
        function banner(preset) {

            let bannercontainer = document.getElementById("bannercontainer")
            //pre place html elements with id's so it doesn't break with the async stuff
            bannercontainer.innerHTML += `
                
                    <div class="${theme}border" style="margin-left:100px; margin-right:100px; margin-top:50px; margin-bottom:50px">
                    
                        <img class="bannericon"src=${backtrack}webassets/banners/${data.banner}.png>

                        <div class="${theme}banner">

                            <div id="bannertitle" class="bannerdiv" style="font-size:40px; margin-bottom:0px; padding-bottom:0px;""></div>
                            <div id="bannerdesc" class="bannerdiv" style="margin-top:0px; padding-top:15px;"></div> 

                        </div>

                    </div>
                
                `

            // get the ids and insert the preset values when loaded
            loadbannerjsondata(`${backtrack}webassets/banners/bannerdata.json`).then(returneddata=>{
            

                let bannertitle = "default text"
                let bannerdisc = "default text, if you're seeing this you didn't define a preset in /webassets/banners/bannerdata.json"

                if (returneddata[`${preset}title`] != undefined){

                    bannertitle = returneddata[`${preset}title`]

                }
                if (returneddata[`${preset}desc`] != undefined){        

                    bannerdisc = returneddata[`${preset}desc`]

                }
                
                if (debuglevel == 1){
                    console.log("Preset",preset,"is being used.")
                }

                document.getElementById("bannertitle").innerHTML += bannertitle
                document.getElementById("bannerdesc").innerHTML += bannerdisc

            })
        }
        
        // if banner is defined, call the function required to load it
        if (data.banner != undefined){
            banner(data.banner)
        }

        // for every single section title there is, call the function for the title and then its details.
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

        // checks if media is true, repeats going through all the media untill there isn't any
        if (data.media != undefined && data.media == true){

            details.innerHTML += `
                
                <div class="${theme}title"> Related Media </div>
                <div id="mediacontainer"></div>
                
            `

            let mediacontainer = document.getElementById("mediacontainer")
            
            for (let i = 1; ;i++){
                let mediatype = data[`media${i}type`]
                let mediapath = data[`media${i}path`]
                let mediadescription = data[`media${i}description`]

                
                if (mediatype != undefined && mediapath != undefined && mediadescription != undefined){ 

                    if (debuglevel == 1){
                        console.log(`Processing media element ${i}: type=${mediatype}, path=${mediapath}, description=${mediadescription}`)
                    }

                    mediacontainer.innerHTML += `

                        <div class="nopaddingdiv">
                            
                            <div class="${data.theme}border">
                                <${mediatype} controls src="${mediapath}" class="mediaimg"></${mediatype}>
                            </div>
                                
                            <div class="${data.theme}border">
                                ${mediadescription}
                            </div>    

                        </div>

                    `
                }else{
                    break
                }

            }
                
        }

        // checks if curses is true, calls the function for loading its border and repeats untill all the
        // curses manually listed in the pagedetails have been loaded
        if (data.curses != undefined && data.curses == true){
                
                let insertedcurseelenemts = ``   
                
                details.innerHTML += `
                
                    <div class="${data.theme}title">Related curses</div>
                    <div class="sort" id="curse"> 
                
                `
                
                for (let i = 1;;i++){
                    
                    let ins = `curse${i}`
                    
                    if (data[ins]){
                        
                        let curse = document.getElementById("curse")

                        curse.innerHTML += `
                        
                            <div id="curseid${i}" class="containerdiv"></div> 
                        
                        `

                        let cursedir = `${backtrack}Curses/${data.s1t1}/${data[ins]}`
                        loadcursejsondata(`${cursedir}`,i).then(result =>{

                            
                    })
                
                }else{

                    break

                }
            }

            details.innerHTML += `
                
                </div>

            `
        }

    
        // if "extra" variable is defined in json, then load its elements after everything else.
        // very much a legacy feature because the old version was only used for curse stuff
        // which now have thier own function. and sfoth which is the only thing that uses this.
        
        if (data.extra != undefined) {
                
            if (debuglevel == 1) {
                console.log("Extra defined, loading")
            }
            
            if (data.extra){
                details.innerHTML += `<div class="containerdiv">${data.extra}</div>`
            }

        }
            
        try{
            console.log("test")
            
            if (extra){
                banner("legacy")
            }

        }catch(error){
        }
               

        // adds the footer
        if (htmlcontainer) {
            htmlcontainer.innerHTML += ` 
            <footer id="footer">
            
                <a href="https://ivouwa.gay" target="_blank" rel="noopener noreferrer">Made by ivouwa in 2026 |</a> 
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
    