type AppReducerType = {
  fetching: boolean,
  fetched: boolean,
}

interface IAppProps {
  appStore?: AppReducerType
}

interface IAppState {}
