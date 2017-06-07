import { combineReducers } from 'redux'
import subjectLibState from '../actions/SubjectLib/SubjectLibState'
import  majorLibState from  '../actions/MajorLib/MajorLibState'
import  collegeLibState from   '../actions/CollegeLib/CollegeLibState.ts'
import  jobLibState from   '../actions/JobLib/JobLibState.ts'
import  searchState from  '../actions/Search/SearchState'
import  homePageState from  '../actions/HomePage/HomePageState'

const rootReducer = combineReducers({
    subjectLibState,
    majorLibState,
    collegeLibState,
    jobLibState,
    searchState,
    homePageState
})

export default rootReducer
