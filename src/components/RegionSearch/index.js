import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby'

import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

import './styles.scss'

const RegionSearch = ({ regionsList }) => {
    const [input, setInput] = useState('')
    const [included, setIncluded] = useState(false)

    const checkInput = (e) => {
        if (e.target.value.length < 6) {
            setInput(e.target.value)
        }
    }

    useEffect(() => {
        if (input.length === 5) {
            regionsList.findIndex(item => Number(item.region.zipCode) === Number(input)) !== -1 ? setIncluded(true) : setIncluded(false)
        }
    }, [input])

    return (
        <div>
            <div className='content'>
                <h3 className='title is-3 has-text-centered'>Enter your zipcode:</h3>
            </div>
            <div className="field box input-box">
                <div className="control has-icons-left has-icons-right">
                    <label htmlFor='zipcode' value='zipcode'/>
                    <input onChange={(e) => checkInput(e)} className={`input ${input.length === 5 && included ? 'is-success' : input.length === 5 && !included ? 'is-danger' : 'input'} is-size-2 is-size-4-mobile`} type="number" placeholder="Zipcode" value={input} id='zipcode' />
                    <span className="icon is-small is-left">
                        <SearchIcon />
                    </span>
                    {input.length === 5 && included ?
                        <span className="icon is-small is-right">
                            <CheckIcon />
                        </span>
                        : input && !included ?
                            <span className="icon is-small is-right is-danger input-x">
                                <ClearIcon />
                            </span>
                            : null
                    }
                </div>
                {input.length === 5 && included ?
                    <p className="help is-success">We serve your area!</p>
                    : input.length === 5 && !included ?
                        <p className="help is-danger"><Link to='/contact'>Contact us</Link> about special service for your region.</p>
                        : null

                }
            </div>
        </div>
    )
}

export default RegionSearch