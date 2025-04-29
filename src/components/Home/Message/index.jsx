import React, {useState} from 'react'
import { Link, Outlet, useNavigate} from 'react-router-dom'


export default function Message() {
  const navigate = useNavigate()
  const [messages] = useState([
    {id:'001',title:'消息1',content:'锄禾日当午'},
    {id:'002',title:'消息2',content:'汗滴禾下土'},
    {id:'003',title:'消息3',content:'谁知盘中餐'},
    {id:'004',title:'消息4',content:'粒粒皆辛苦'}
  ])

  return (
    <div>
      <div>
			<ul>
				{
          messages.map((msg)=>{
            return (
              <li key={msg.id}>
                <Link to={`detail/${msg.id}/${msg.title}/${msg.content}/`}>{msg.title}</Link>
              </li>
            )
          })
        }
			</ul>
      <hr />
      <Outlet/>
      <hr />
      <button onClick={()=> navigate("/about")}>返回至About</button>
		</div>
    </div>
  )
}
