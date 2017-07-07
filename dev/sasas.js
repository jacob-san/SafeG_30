/**
 * Created by sandeepj on 6/7/17.
 */
ReactDOM.render(
    ( <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRoute component={Home} onEnter={isLoggedIn}/>
                    <Route component={Header}>
                        <Route component={TralcerLoader}>
                            <Route path="user/home" component={UserHome} onEnter={validate}/>
                            <Route path="user/profile" component={UserProfile} onEnter={validate}/>
                            <Route path="user/account/link/email(/:email)(/:serviceType)(/:id)(?code=:authCode)"
                                   component={UserProfile} onEnter={validate}/>
                            <Route path="user/connections(/:contactId)" component={Connections} onEnter={validate}/>
                            <Route path="user/account/settings" component={AccountSettings} onEnter={validate}/>
                            <Route path="user/vault" component={Vault} onEnter={validate}/>
                            <Route path="user/payments" component={Payments} onEnter={validate}/>
                        </Route>
                    </Route>
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'));