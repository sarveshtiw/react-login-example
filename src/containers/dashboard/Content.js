import React from 'react';
import request from 'request'
import 'babel-polyfill'
import Layout from '../../components/layout/Dashboard'
import localStorage from '../../lib/Auth'

let baseURL = 'https://swapi.co/api/planets'

class Content extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userInfo: {
                name: '',
                birth_year: ''
            },
            message: '',
            list: [],
            search: {
                planet_name: ''
            },
            dialogbox: {
                status: false
            },
            objData: {}
        }
        this.onSearch = this.onSearch.bind(this)
        this.getPlanetList = this.getPlanetList.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onOpen = this.onOpen.bind(this)
    }

    /**
     * @call before render method call
     * @returns {Promise.<void>}
     */
    componentWillMount() {
        let userInfo = localStorage.isUserAuthenticated('userInfo') ? JSON.parse(localStorage.getToken('userInfo')) : {}
        if (Object.keys(userInfo).length > 0) {
            this.setState({
                userInfo: {
                    name: userInfo.name,
                    birth_year: userInfo.birth_year
                }
            })
        }
    }

    async componentDidMount() {
        let response = await this.getPlanetList()
        if (response.error) {
            this.setState({
                message: response.error,
                list: []
            })
        } else {
            this.setState({
                message: '',
                list: response.list
            })
        }
    }

    getPlanetList(inputData = '') {
        let url = `${baseURL + inputData}`
        return new Promise((resolve, reject) => {
            return request.get(url, (err, res, body) => {
                if (err) {
                    return resolve({
                        error: err
                    })
                } else {
                    let response = JSON.parse(res.body)
                    if (response.count) {
                        return resolve({
                            error: null,
                            list: response.results
                        })
                    } else {
                        return resolve({
                            error: 'No record found'
                        })
                    }
                }
            })
        })
    }

    async onSearch(event) {
        let search = this.state.search
        search[event.target.name] = event.target.value
        this.setState({
            search
        })
        let searchInput = `?search=${this.state.search[event.target.name]}`
        let response = await this.getPlanetList(searchInput)
        if (response.error) {
            this.setState({
                message: response.error,
                list: []
            })
        } else {
            this.setState({
                message: '',
                list: response.list
            })
        }
    }

    onClose() {
        this.setState({
            dialogbox: {
                status: false
            }
        })
    }

    onOpen(objData) {
        this.setState({
            dialogbox: {
                status: true
            },
            objData: objData
        })
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <Layout
                userInfo={this.state.userInfo}
                list={this.state.list}
                arrData={this.props.arrData}
                onSearch={this.onSearch}
                search={this.state.search}
                onClose={this.onClose}
                onOpen={this.onOpen}
                dialogBox={this.state.dialogbox.status}
                objData={this.state.objData}
            />
        );
    }
}
export default Content;
