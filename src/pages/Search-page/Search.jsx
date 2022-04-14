import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import './style.css'
import axios from 'axios'

function Search () {

    /*const [items, setItems] = useState([]);
    const [q, setQ] = useState('')
    const [searchParam] = useState(['name', 'capital'])
    function search() {
      return items.filter((item) => {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString()?.toLowerCase()?.indexOf(q.toLowerCase()) > -1
          )
        })
      })
    }
  
    useEffect(() => {
      axios.get('https://api.github.com/users/marcelofgaraujo')
      .then((data) => {
          setItems({
              avatar: data.avatar_url,
              name: data.name,
              bio: data.bio,
              skill_1: data.node_id,
              skill_2: data.id,
              skill_3: data.followers,
              skill_4: data.following
          })
        })
    }, [])*/

    return (
        <>
        <Header />
        <main className='mainSearch'>
            <section>
                <Link to='/home'><div type='button' className='newSearch'><p>NOVA BUSCA</p></div></Link>
                <span>Acessibilidade</span>
            </section>
            <div className='cards'>
            
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Search