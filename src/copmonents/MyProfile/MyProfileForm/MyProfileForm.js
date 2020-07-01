import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "../MyProfile.module.css";
import edit from "../../../images/re.svg"
import PropTypes from 'prop-types';


const MyProfileForm = ({handleSubmit, changeData, user, setChangeData}) => {
    return (<>
            <form className={style.changeDataContainer} onSubmit={handleSubmit}>
                <div>
                    <div>First Name</div>
                    {changeData ?
                        <Field component={"input"} name={"first_name"}
                               size={"large"}/> :
                        <div className={style.userDataItem}>{user.user.first_name}</div>}
                </div>
                <div>
                    <div>Last Name</div>
                    {changeData ? <Field component={"input"} name={"last_name"}
                                         size={"large"}/> :
                        <div className={style.userDataItem}>{user.user.last_name}</div>}
                </div>
                <div>
                    <div>Email</div>
                    <div className={style.userDataItem}>{user.user.email}</div>
                </div>
                {user.user.info &&
                <Field component={"textarea"} placeholder={user.user.info} name={"info"}/>}
                {changeData ? <button className={style.submitButton}>Change Your Data</button> :
                    <div>
                        <img onClick={() => setChangeData(value => !value)} className={style.editButton}
                             src={edit}
                             alt=""/>
                    </div>}
            </form>
        </>
    )
}
MyProfileForm.propTypes = {
    handleSubmit: PropTypes.func,
    changeData: PropTypes.bool,
    user: PropTypes.object,
    setChangeData: PropTypes.func
}

export default reduxForm({form: "myProfileForm"})(MyProfileForm)