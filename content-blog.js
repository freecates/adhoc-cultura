const base64 = require ('base-64')
const utf8 = require ('utf8')
const fetch = require ('isomorphic-unfetch')

const contentBlog = async function() {
    const res = await fetch(`https://adhocdata.vercel.app/equip.json`)
    const adhocmembers = await res.json()
  
    console.log(`Membres equip data fetched. Count: ${adhocmembers.length}`)
  
    return { adhocmembers }
}