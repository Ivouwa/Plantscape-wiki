// ONLY CURSE / ENEMY / UPGRADES / ETC PAGES SHOULD BE USING THIS JS!
// WHEN MAKING A REDIRECT PAGE (/enemies /home /curses) WRITE EVERYTHING DIRECTLY!
// thank yous!

let debuglevel = 1

// 1 = logs everything
// anything else will only show errors and such in the console


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
        localtesting = 0

        if (url.hostname == "127.0.0.1" || url.hostname == "localhost"){
            localtesting = 3
        }else{
            localtesting = 2
        }

        let amt = url.pathname.split("/").length - localtesting
        console.log(url.hostname)

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

                    <detail class="detail" id="detail">

                    <div id="bannercontainer"></div>

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
        function banner(preset, number) {


            //pre place html elements with id's so it doesn't break with the async stuff
            let bannercontainer = document.getElementById(`bannercontainer`)

            bannercontainer.innerHTML += `

                    <div class="${theme}border" id="subbannercontainer${number}" style="margin-left:100px; margin-right:100px; margin-top:50px; margin-bottom:50px">

                        <img class="bannericon"src=${backtrack}webassets/banners/${preset}.png>

                        <div class="${theme}banner">

                            <div id="bannertitle${number}" class="bannerdiv" style="font-size:40px; margin-bottom:0px; padding-bottom:0px;""></div>
                            <div id="bannerdesc${number}" class="bannerdiv" style="margin-top:0px; padding-top:15px;"></div>

                        </div>

                    </div>

                `

            // get the ids and insert the preset values when loaded
            loadbannerjsondata(`${backtrack}webassets/banners/bannerpresets.json`,number).then(returneddata=>{


                let bannertitle = "default text"
                let bannerdisc = "default text, if you're seeing this there isn't a predefined banner in /webassets/banners/bannerdata.json or the banner function is broken."

                if (returneddata[`${preset}title`] != undefined){

                    bannertitle = returneddata[`${preset}title`]

                }
                if (returneddata[`${preset}desc`] != undefined){

                    bannerdisc = returneddata[`${preset}desc`]

                }

                if (debuglevel == 1){
                    console.log("Preset",preset,"is being used.")
                }

                document.getElementById(`bannertitle${number}`).innerHTML += bannertitle
                document.getElementById(`bannerdesc${number}`).innerHTML += bannerdisc

            })
        }

        // if banner is defined, call the function required to load it

        for (let i = 1; ;i++){

            let bannernum = `banner${i}`

                if (data[bannernum] != undefined){
                    banner(data[bannernum], 1)
                }else{
                    break
                }
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

        // repeats going through all the media untill there isn't any
        if (data.media1 != undefined){

            details.innerHTML += `

                <div class="${theme}title"> Related Media </div>
                <div id="mediacontainer"></div>

            `

            let mediacontainer = document.getElementById("mediacontainer")

            for (let i = 1; ;i++){

                if (data[`media${i}`]){
                    
                    let mediatype = data[`media${i}`][`type`]
                    let mediapath = data[`media${i}`][`path`]
                    let mediadescription = data[`media${i}`][`description`]

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
        if (data.curses != undefined){

            if (data.cursetext != undefined) {

                details.innerHTML += `

                    <div class="${data.theme}title">${data.cursetext}</div>
                    <div class="sort" id="curse">

                `

            } else {

                details.innerHTML += `

                    <div class="${data.theme}title">Related curses</div>
                    <div class="sort" id="curse">

                `

            }

            for (let i = 1;;i++){

                let ins = data.curses[i]

                if (data.curses[i]){

                    let curse = document.getElementById("curse")

                    curse.innerHTML += `

                        <div id="curseid${i}" class="containerdiv"></div>

                    `

                    if (data.cursedir != undefined){

                        cursedir = `${data.cursedir}/${ins}`

                    }else{

                        cursedir = `${backtrack}Curses/${data.s1t1}/${ins}`

                    }
                    loadcursejsondata(`${cursedir}`,i)

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
                banner("legacy", 100)
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
