// importing menu from antd
import { Menu } from "antd"
//importing link from next js
import Link from 'next/Link'

// destructuring the Menu.Item to Item
const {Item}=Menu

//importing icon
import {HomeTwoTone,UserAddOutlined,LoginOutlined} from '@ant-design/icons'

const Nav = () => {
  return (
  <>
    <Menu mode="horizontal">
    <Item icon={ <HomeTwoTone/>}>
     
      < Link href ="/">
        <a> APP</a>
      </Link>
    </Item>



    <Item icon={ <LoginOutlined/>}>
      < Link href ="/login">
        <a> Login</a>
      </Link>
    </Item>

    <Item icon={ <UserAddOutlined/>}>
      < Link href ="/register">
        <a> Register</a>
      </Link>
    </Item>
</Menu>
   </>
    )
};

export default Nav;
