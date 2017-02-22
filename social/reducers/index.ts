import { combineReducers } from 'redux'
import subjectLibState from '../actions/SubjectLib/SubjectLibState'
import  majorLibState from  '../actions/MajorLib/MajorLibState'
import  collegeLibState from   '../actions/CollegeLib/CollegeLibState.ts'
import  jobLibState from   '../actions/JobLib/JobLibState.ts'
import  searchState from  '../actions/Search/SearchState'

const rootReducer = combineReducers({
    subjectLibState,
    majorLibState,
    collegeLibState,
    jobLibState,
    searchState,
})

export default rootReducer
