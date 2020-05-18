import React from "react";
import style from "./Channels.module.css"
import cn from 'classnames';
import { ChannelsType } from "../../../redux/channels-reducer";
import { connect } from "react-redux";

type ChannelProps = {
    channels: ChannelsType
}

const Channels = ({channels}: ChannelProps) => {

    let channelsElements = channels.map ( (ch, index) => {
        return (
            <div className={style.channel}>
                <div className={style.channelLogo}><img src={ch.logo} alt=""/></div>
                <div className={style.schedule}>
                    <h3>{ch.name}</h3>
                    {ch.programs.map ( (prog, index) => {
                        return (
                            <div className={cn(style.program, {[style.activeProgram]: index === 0 })}>
                                <div className={style.time}>{prog.time}</div>
                                <div>{prog.program}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className={style.wrapper}>
            {channelsElements}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        channels: state.channels.channels
    }
}

export default connect(mapStateToProps)(Channels);