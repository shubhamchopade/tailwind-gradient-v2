type State = {
  isLoading?: boolean,
  likes: number,
  toggle: boolean,
  debouncedValue?: string
};

type Action = { type: "LOADING" } 
| { type: "RESOLVED", likes: number, toggle: boolean, debouncedValue: string } 
| {type: 'INCREMENT_LIKES'}
| {type: 'DECREMENT_LIKES'}


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true};
    case "RESOLVED":
      return { ...state, isLoading: false, likes: action.likes, toggle: action.toggle, debouncedValue: action.debouncedValue };
    case "INCREMENT_LIKES":
      localStorage.setItem(String(state.debouncedValue), "false");
      return {...state, likes: state.likes !== 0 ? state.likes - 1 : 0, toggle: !state.toggle}
    case "DECREMENT_LIKES":
      localStorage.setItem(String(state.debouncedValue), "true");
      return {...state, likes: state.likes + 1 , toggle: !state.toggle}
  }
};