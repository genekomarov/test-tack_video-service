import React, {useState} from "react";
import style from "../Header.module.css";
import {connect} from "react-redux";
import {setUserName, saveUserName} from '../../../redux/profile-reducer'

const Auth = (props: any) => {

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (e: React.FormEvent<HTMLInputElement>) => {
        setEditMode(false);
        e.currentTarget.value === ''
            ? props.saveUserName('---')
            : props.saveUserName(e.currentTarget.value)
    }

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.setUserName(e.currentTarget.value);
    }

    return (
        <div className={style.login}>

            {!editMode && <span className={style.userName}
                                 onDoubleClick={activateEditMode}
            >
                {props.userName}
            </span>}
            {editMode && <input className={style.userName}
                                 type="text"
                                 value={props.userName === "---" ? "" : props.userName}
                                 onBlur={deactivateEditMode}
                                 onChange={onNameChange}
                                 autoFocus={true}
            />}

            <span className={style.logout}>Выйти</span>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        userName: state.profile.userName
    }
}

export default connect(mapStateToProps, {
    setUserName,
    saveUserName
})(Auth);