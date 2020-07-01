import React, {useState} from "react";
import cow from "../../images/cow.jpg"
import {notification} from "antd";
import style from "./MyProfile.module.css"
import MyProfileForm from "./MyProfileForm/MyProfileForm";
import MyProfileAddressesList from "./MyProfileAddresses/MyProfileAddresses";
import MyProfileAddressesFullForms from "./MyProfileAddressesFullForm/MyProfileAddressesFullForms";
import PropTypes from 'prop-types';

const MyProfile = ({changeUserDataThunk, user, deleteAddressThunk, addresses, changeAddressThunk, addAddressThunk}) => {
    const [addAddressForm, setAddAddressForm] = useState(false)
    const [addAnimation, setAddAnimation] = useState(false)
    const [changeAddressForm, setChangeAddressForm] = useState(false)
    const [changeAnimation, setChangeAnimation] = useState(false)
    const [id, setId] = useState(null)
    const [changeData, setChangeData] = useState(false)
    const showAddForm = () => {
        setAddAddressForm(true)
        setChangeAnimation(false)
        setAddAnimation(value => !value)

    }
    const showChangeForm = (id) => {
        setChangeAddressForm(true)
        setAddAnimation(false)
        setChangeAnimation(value => !value)
        setId(id)
    }
    const ChangeData = (value) => {
        if (value.first_name && value.last_name) {
            changeUserDataThunk({...value, email: user.email}, user)
            setChangeData(false)
            notification.success({message: "Your data was changed"})
        } else {
            notification.error({message: "Please fill all strings"})
        }

    }

    return (<div className={style.container}>
            < img className={style.cow} src={cow} alt={""}/>
            <div className={style.myProfile}>
                <MyProfileForm user={user} onSubmit={ChangeData} changeData={changeData} setChangeData={setChangeData}/>
                <MyProfileAddressesList deleteAddressThunk={deleteAddressThunk} addresses={addresses}
                                        showChangeForm={showChangeForm}/>
                <button className={style.addAddress} onClick={() => showAddForm()}>Add address</button>
            </div>
            <MyProfileAddressesFullForms changeAnimation={changeAnimation}
                                         setChangeAnimation={setChangeAnimation}
                                         changeAddressForm={changeAddressForm}
                                         changeAddress={changeAddressThunk}
                                         addAnimation={addAnimation}
                                         addAddressForm={addAddressForm} id={id}
                                         addAddressThunk={addAddressThunk}
                                         setAddAnimation={setAddAnimation}
            />

            </div>


    )
}
MyProfile.propTypes = {
    changeUserDataThunk: PropTypes.func,
    user: PropTypes.object,
    deleteAddressThunk: PropTypes.func,
    addresses: PropTypes.array,
    changeAddressThunk: PropTypes.func,
    addAddressThunk: PropTypes.func
}
export default MyProfile