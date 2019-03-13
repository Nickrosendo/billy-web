import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => ({ firebase: state.firebase })

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
    console.log('rest: ', rest);
    return (
        <Route
            {...rest}
            render={props =>
                auth ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;