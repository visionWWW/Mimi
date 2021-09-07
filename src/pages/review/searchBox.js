import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import './re_main.css';

export default class SearchBox extends Component {
    data = [
        {
            key: '음식',
            value: '음식미담',
        },
        {
            key: '또',
            value: '또와또',
        },
        {
            key: '비',
            value: '비일',
        }
    ]

    render() {
        return (
            <ReactSearchBox style={{width:300}}
                placeholder="음식점을 입력해주세요."
                data={this.data}
                onSelect={record => console.log(record)}
                onFocus={() => {
                    console.log('This function is called when is focussed')
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