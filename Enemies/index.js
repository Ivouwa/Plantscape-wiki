fetch('pagedetails.json')

    .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.json(); // 2. Convert response to a JS object
    })

    .then(data => {

        const urlbar = document.getElementById('urlbar')
        urlbar.innerHTML=`${data.urlbar}`

        const pagename = document.getElementById('pagename')
        pagename.innerHTML=`${data.pagename}`

        const output = document.getElementById('name')
        output.innerHTML=`${data.name}`

        const secondtitle = document.getElementById('secondtitle')
        secondtitle.innerHTML=`${data.secondtitle}`

        const thirdtitle = document.getElementById('thirdtitle')
        thirdtitle.innerHTML=`${data.thirdtitle}`


        const footer = document.getElementById('footer')
        footer.innerHTML = `

        Made by Ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki">Found an issue? Report in the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX">Join the plantscape server</a>
        
        `
    })
    
    /*
    
    const nameofelement = document.getElementById('nameofelement')
    nameofelement.innerHTML = ` insert text or code here` 
    
    ^ if you want to add a new text element, assign the id "nameofelement" to it then in the json add "nameofelement": "elementdetails"

    */