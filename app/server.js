import express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Layout from './components/Layout'
import renderStatic from './renderStatic'

let router = express.Router()
let production = process.env.NODE_ENV === 'production'

router.get('/', (req, res) => {
  renderStatic(req, res, output => {
    let html = (
      <Layout assets={global.assets}>
        <div dangerouslySetInnerHTML={{__html: output}} />
      </Layout>
    )
    let fullOutput = renderToStaticMarkup(html)
    res.send(fullOutput)
  })
})

// router.get('/countries', (req, res) => {
//   let html = (
//     <Layout>
//       <Header/>
//       <Content>
//         <Countries countries={CountriesData.countries}/>
//       </Content>
//     </Layout>
//   )
//   res.send(renderToString(html))
// })

export default router
