import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import './re_main.css';
import restdata from './restaurantData.json';

export default class SearchBox extends Component {

    render() {
        return (
            <ReactSearchBox
                placeholder="음식점을 입력해주세요."
                data={restdata.data}
                onSelect={record => console.log(record)}
                onFocus={() => {
                    console.log(this.data)
                    console.log('This function is called when is focussed')
                }}
                onChange={value => console.log(value)}
                fuseConfigs={{
                    threshold: 0.05,
                }}
            />
        )
    }
}