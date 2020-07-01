import React from "react";
import {Button, Dropdown, Menu} from "antd";
import PropTypes from "prop-types";


const CartMenu = ({addresses, setId}) => {
    const menu = (
        <Menu>
            {addresses.map(address => <Menu.Item key={address.id} onClick={() => setId(address.id)}>
                <div>
                    City:
                    {address.city}
                    street:
                    {address.street}
                    building:
                    {address.building} {address.flat &&
                <span>flat:{address.flat}</span>}
                </div>
            </Menu.Item>)}
        </Menu>
    )
    return (<>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>Choose your address</Button>
            </Dropdown>
        </>
    )
}
CartMenu.propTypes={
    addresses:PropTypes.array,
    setId:PropTypes.func,
}
export default CartMenu