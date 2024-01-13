import '../../default.css'
import './home.css'

import mods from 'https://cdn.discordapp.com/attachments/973558049031737394/1195792446001533001/mods.json'

import ModComponent from '../../components/modComponent/modComponent'

function Home()
{
    console.log(mods);

    return (
        <>
            <div className="header-container">
                <div className="header">
                    <h1>SNKRX Mod Database</h1>
                </div>
            </div>
            <div className="mod-list-container">
                <div className="mod-list">
                    {mods.map(mod =>
                    {
                        <ModComponent mod={mod} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
