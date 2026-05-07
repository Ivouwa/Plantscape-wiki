fetch('pagedetails.json')

    .then(response => {
 
        return response.json();
    })

    .then(data => {

        const urlbar = document.getElementById('urlbar')
        urlbar.innerHTML=`${data.urlbar}`
  
        const pagename = document.getElementById('pagename')
        pagename.innerHTML=`${data.pagename}`


        const output = document.getElementById('name')
        output.innerHTML=`${data.name}`

        const description = document.getElementById('description')
        description.innerHTML=`${data.description}`




        const secondtitle = document.getElementById('secondtitle')
        secondtitle.innerHTML=`${data.secondtitle}`

        const detail1 = document.getElementById('detail1')
        detail1.innerHTML=`${data.detail1}`

        const detail2 = document.getElementById('detail2')
        detail2.innerHTML=`${data.detail2}`


    
        
        const thirdtitle = document.getElementById('thirdtitle')
        thirdtitle.innerHTML=`${data.thirdtitle}`

        const deathmsg = document.getElementById('deathmsg')
        deathmsg.innerHTML=`${data.deathmsg}`




        const footer = document.getElementById('footer')
        footer.innerHTML = `

        Made by Ivouwa in 2026 | 
        <a href="https://github.com/Ivouwa/Plantscape-wiki">Want to contribute? View the github</a> | 
        <a href="https://discord.gg/NZrrj6rdRX">Join the plantscape server</a>

        `
    })
    

    /*
    
    const nameofelement = document.getElementById('nameofelement')
    nameofelement.innerHTML = ` insert text or code here` 
    
    ^ if you want to add a new text element, assign the id "nameofelement" to it then in the json add "nameofelement": "elementdetails"

    */