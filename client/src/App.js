import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashbord/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/404/NotFound';
import Products from './components/products/Products';
import Contacts from './components/contacts/Contacts';
import Livraison from './components/livraison/livraison';
import ListCommand from './components/commande/ListCommand';
import Profile from "./components/dashbord/Profile"
import { CurrentUser } from './js/action/users';
import { getPanier } from './js/action/panier';
import { logoutUser } from './js/action/users'
import Dropdown from 'react-bootstrap/Dropdown'
import Web from "./Web.jpg"
import './App.css'





function App() {
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const current = useSelector(state => state.userReducer.user)
  const user = useSelector(state => state.userReducer.user)
  const paniers = useSelector(state => state.paniersReducer.paniers.filter(el => el.user === current._id))


  const dispatch = useDispatch();
  const history = useHistory()
  useEffect( () => {
     dispatch(CurrentUser());
    dispatch(getPanier());

  }, [dispatch]) 

  return (
    <div>
    <div className="sectione">
    <img style={{width:"25px",height:"25px" ,margin:"5px 0px 0px 5px"}} src="https://img.icons8.com/color-glass/48/000000/phone-not-being-used.png"/><p class="center">: 21143102</p>
    <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC03NyA1MTIuMDAyMTMgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMCIgZmlsbD0iI2YwMCIvPjxwYXRoIGQ9Im0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" style={{width:"28px",marginRight:"10px"}}/>
   <img style={{width:"28px" ,marginRight:"10px"}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDIuOTY2MTU2MjY4IiB4Mj0iNDY5LjAzMzc0NzciIHkxPSI0NjkuMDI5NjQ3NzE2OCIgeTI9IjQyLjk2MjA1NjI4NDgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZDYwMCIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNmZjAxMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkODAwYjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNjMuMDQyOTk1NjQ1NiIgeDI9IjM0OC45NTM5MDgzNDY0IiB5MT0iMzQ4Ljk1MzgwODMzMTIiIHkyPSIxNjMuMDQyODk1NjMwNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmY2NDAwIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2ZmMDEwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZkMDA1NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM3MC45MjkxMzI1NDMyIiB4Mj0iNDE0LjM3Mjc4NDk5MTIiIHkxPSIxNDEuMDY3NjcxNDMzNiIgeTI9Ijk3LjYyNDAxODk4NTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2YzMDA3MiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1MDA5NyIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMC40NjA5MzggMTUwLjQ1MzEyNWMtMS4yNDYwOTQtMjcuMjUtNS41NzQyMTktNDUuODU5Mzc1LTExLjkwMjM0NC02Mi4xNDA2MjUtNi40MjU3ODItMTcuMDgyMDMxLTE2LjUwMzkwNi0zMi41NTQ2ODgtMjkuNTI3MzQ0LTQ1LjM0Mzc1LTEyLjc4NTE1Ni0xMy4wMjM0MzgtMjguMjYxNzE5LTIzLjEwNTQ2OS00NS4zNDM3NS0yOS41MzUxNTYtMTYuMjg1MTU2LTYuMzI0MjE5LTM0Ljg5MDYyNS0xMC42NDg0MzgtNjIuMTQwNjI1LTExLjg4NjcxOS0yNy4zMDA3ODEtMS4yNS0zNi4wMjM0MzctMS41NDY4NzUtMTA1LjU0Njg3NS0xLjU0Njg3NXMtNzguMjQ2MDk0LjI5Njg3NS0xMDUuNTQ2ODc1IDEuNTM5MDYyYy0yNy4yNSAxLjI0NjA5NC00NS44NTU0NjkgNS41NzQyMTktNjIuMTQwNjI1IDExLjkwMjM0NC0xNy4wODIwMzEgNi40MjU3ODItMzIuNTU0Njg4IDE2LjUwMzkwNi00NS4zNDM3NSAyOS41MjczNDQtMTMuMDIzNDM4IDEyLjc4NTE1Ni0yMy4xMDU0NjkgMjguMjU3ODEyLTI5LjUzNTE1NiA0NS4zMzk4NDQtNi4zMjQyMTkgMTYuMjg1MTU2LTEwLjY0ODQzOCAzNC44OTQ1MzEtMTEuODg2NzE5IDYyLjE0MDYyNS0xLjI1IDI3LjMwNDY4Ny0xLjU0Njg3NSAzNi4wMjM0MzctMS41NDY4NzUgMTA1LjU0Njg3NSAwIDY5LjUyNzM0NC4yOTY4NzUgNzguMjUgMS41NDY4NzUgMTA1LjU1MDc4MSAxLjI0MjE4NyAyNy4yNDYwOTQgNS41NzAzMTMgNDUuODU1NDY5IDExLjg5ODQzNyA2Mi4xNDA2MjUgNi40MjU3ODIgMTcuMDc4MTI1IDE2LjUwMzkwNyAzMi41NTQ2ODggMjkuNTI3MzQ0IDQ1LjMzOTg0NCAxMi43ODUxNTYgMTMuMDIzNDM3IDI4LjI2MTcxOSAyMy4xMDE1NjIgNDUuMzQzNzUgMjkuNTI3MzQ0IDE2LjI4MTI1IDYuMzMyMDMxIDM0Ljg5MDYyNSAxMC42NTYyNSA2Mi4xNDA2MjUgMTEuOTAyMzQzIDI3LjMwNDY4OCAxLjI0NjA5NCAzNi4wMjM0MzggMS41MzkwNjMgMTA1LjU0Njg3NSAxLjUzOTA2MyA2OS41MjM0MzggMCA3OC4yNDYwOTQtLjI5Mjk2OSAxMDUuNTQ2ODc1LTEuNTM5MDYzIDI3LjI1LTEuMjQ2MDkzIDQ1Ljg1NTQ2OS01LjU3MDMxMiA2Mi4xNDA2MjUtMTEuOTAyMzQzIDM0LjM4NjcxOS0xMy4yOTY4NzYgNjEuNTcwMzEzLTQwLjQ4MDQ2OSA3NC44NjcxODgtNzQuODY3MTg4IDYuMzMyMDMxLTE2LjI4NTE1NiAxMC42NTYyNS0zNC44OTQ1MzEgMTEuOTAyMzQ0LTYyLjE0MDYyNSAxLjI0MjE4Ny0yNy4zMDQ2ODcgMS41MzkwNjItMzYuMDIzNDM3IDEuNTM5MDYyLTEwNS41NDY4NzUgMC02OS41MjczNDQtLjI5Njg3NS03OC4yNDYwOTQtMS41MzkwNjItMTA1LjU0Njg3NXptLTQ2LjA4MjAzMiAyMDguOTk2MDk0Yy0xLjEzNjcxOCAyNC45NjA5MzctNS4zMDg1OTQgMzguNTE1NjI1LTguODEyNSA0Ny41MzUxNTYtOC42MTMyODEgMjIuMzI4MTI1LTI2LjI1NzgxMiAzOS45NzI2NTYtNDguNTg1OTM3IDQ4LjU4NTkzNy05LjAxOTUzMSAzLjUwMzkwNy0yMi41NzQyMTkgNy42NzU3ODItNDcuNTM1MTU3IDguODEyNS0yNi45ODgyODEgMS4yMzQzNzYtMzUuMDg1OTM3IDEuNDkyMTg4LTEwMy40NDUzMTIgMS40OTIxODgtNjguMzYzMjgxIDAtNzYuNDU3MDMxLS4yNTc4MTItMTAzLjQ0OTIxOS0xLjQ5MjE4OC0yNC45NTcwMzEtMS4xMzY3MTgtMzguNTExNzE5LTUuMzA4NTkzLTQ3LjUzNTE1Ni04LjgxMjUtMTEuMTE3MTg3LTQuMTA1NDY4LTIxLjE3NTc4MS0xMC42NDg0MzctMjkuNDMzNTk0LTE5LjE1MjM0My04LjUwMzkwNi04LjI1NzgxMy0xNS4wNDY4NzUtMTguMzEyNS0xOS4xNTIzNDMtMjkuNDMzNTk0LTMuNTAzOTA3LTkuMDE5NTMxLTcuNjc1NzgyLTIyLjU3NDIxOS04LjgxMjUtNDcuNTM1MTU2LTEuMjMwNDY5LTI2Ljk5MjE4OC0xLjQ5MjE4OC0zNS4wODk4NDQtMS40OTIxODgtMTAzLjQ0NTMxMyAwLTY4LjM1OTM3NS4yNjE3MTktNzYuNDUzMTI1IDEuNDkyMTg4LTEwMy40NDkyMTggMS4xNDA2MjQtMjQuOTYwOTM4IDUuMzA4NTkzLTM4LjUxNTYyNiA4LjgxMjUtNDcuNTM1MTU3IDQuMTA1NDY4LTExLjEyMTA5MyAxMC42NTIzNDMtMjEuMTc5Njg3IDE5LjE1MjM0My0yOS40Mzc1IDguMjU3ODEzLTguNTAzOTA2IDE4LjMxNjQwNy0xNS4wNDY4NzUgMjkuNDM3NS0xOS4xNDg0MzcgOS4wMTk1MzEtMy41MDc4MTMgMjIuNTc0MjE5LTcuNjc1NzgyIDQ3LjUzNTE1Ny04LjgxNjQwNiAyNi45OTIxODctMS4yMzA0NjkgMzUuMDg5ODQzLTEuNDkyMTg4IDEwMy40NDUzMTItMS40OTIxODhoLS4wMDM5MDZjNjguMzU1NDY4IDAgNzYuNDUzMTI1LjI2MTcxOSAxMDMuNDQ5MjE4IDEuNDk2MDk0IDI0Ljk2MDkzOCAxLjEzNjcxOCAzOC41MTE3MTkgNS4zMDg1OTQgNDcuNTM1MTU3IDguODEyNSAxMS4xMTcxODcgNC4xMDU0NjggMjEuMTc1NzgxIDEwLjY0ODQzNyAyOS40MzM1OTMgMTkuMTQ4NDM3IDguNTAzOTA3IDguMjU3ODEzIDE1LjA0Njg3NiAxOC4zMTY0MDcgMTkuMTQ4NDM4IDI5LjQzNzUgMy41MDc4MTIgOS4wMTk1MzEgNy42Nzk2ODggMjIuNTc0MjE5IDguODE2NDA2IDQ3LjUzNTE1NyAxLjIzMDQ2OSAyNi45OTIxODcgMS40OTIxODggMzUuMDg5ODQzIDEuNDkyMTg4IDEwMy40NDUzMTIgMCA2OC4zNTkzNzUtLjI1NzgxMyA3Ni40NTMxMjUtMS40OTIxODggMTAzLjQ0OTIxOXptMCAwIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0ibTI1NS45OTYwOTQgMTI0LjUzOTA2MmMtNzIuNjAxNTYzIDAtMTMxLjQ1NzAzMiA1OC44NTkzNzYtMTMxLjQ1NzAzMiAxMzEuNDYwOTM4czU4Ljg1NTQ2OSAxMzEuNDU3MDMxIDEzMS40NTcwMzIgMTMxLjQ1NzAzMWM3Mi42MDU0NjggMCAxMzEuNDYwOTM3LTU4Ljg1NTQ2OSAxMzEuNDYwOTM3LTEzMS40NTcwMzFzLTU4Ljg1NTQ2OS0xMzEuNDYwOTM4LTEzMS40NjA5MzctMTMxLjQ2MDkzOHptMCAyMTYuNzkyOTY5Yy00Ny4xMjUtLjAwMzkwNi04NS4zMzIwMzItMzguMjA3MDMxLTg1LjMyODEyNS04NS4zMzU5MzcgMC00Ny4xMjUgMzguMjAzMTI1LTg1LjMzMjAzMiA4NS4zMzIwMzEtODUuMzMyMDMyIDQ3LjEyODkwNi4wMDM5MDcgODUuMzMyMDMxIDM4LjIwNzAzMiA4NS4zMzIwMzEgODUuMzMyMDMyIDAgNDcuMTI4OTA2LTM4LjIwNzAzMSA4NS4zMzU5MzctODUuMzM1OTM3IDg1LjMzNTkzN3ptMCAwIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTQyMy4zNzEwOTQgMTE5LjM0NzY1NmMwIDE2Ljk2NDg0NC0xMy43NTM5MDYgMzAuNzE4NzUtMzAuNzE4NzUgMzAuNzE4NzUtMTYuOTY4NzUgMC0zMC43MjI2NTYtMTMuNzUzOTA2LTMwLjcyMjY1Ni0zMC43MTg3NSAwLTE2Ljk2ODc1IDEzLjc1MzkwNi0zMC43MjI2NTYgMzAuNzIyNjU2LTMwLjcyMjY1NiAxNi45NjQ4NDQgMCAzMC43MTg3NSAxMy43NTM5MDYgMzAuNzE4NzUgMzAuNzIyNjU2em0wIDAiIGZpbGw9InVybCgjYykiLz48L3N2Zz4=" />
    <img style={{width:"28px",marginRight:"10px"}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00ODMuNzM4MjgxIDBoLTQ1NS41Yy0xNS41OTc2NTYuMDA3ODEyNS0yOC4yNDIxODcyNSAxMi42NjAxNTYtMjguMjM4MjgxIDI4LjI2MTcxOXY0NTUuNWMuMDA3ODEyNSAxNS41OTc2NTYgMTIuNjYwMTU2IDI4LjI0MjE4NyAyOC4yNjE3MTkgMjguMjM4MjgxaDQ1NS40NzY1NjJjMTUuNjA1NDY5LjAwMzkwNiAyOC4yNTc4MTMtMTIuNjQ0NTMxIDI4LjI2MTcxOS0yOC4yNSAwLS4wMDM5MDYgMC0uMDA3ODEyIDAtLjAxMTcxOXYtNDU1LjVjLS4wMDc4MTItMTUuNTk3NjU2LTEyLjY2MDE1Ni0yOC4yNDIxODcyNS0yOC4yNjE3MTktMjguMjM4Mjgxem0wIDAiIGZpbGw9IiM0MjY3YjIiLz48cGF0aCBkPSJtMzUzLjUgNTEydi0xOThoNjYuNzVsMTAtNzcuNWgtNzYuNzV2LTQ5LjM1OTM3NWMwLTIyLjM4NjcxOSA2LjIxNDg0NC0zNy42NDA2MjUgMzguMzE2NDA2LTM3LjY0MDYyNWg0MC42ODM1OTR2LTY5LjEyODkwNmMtNy4wNzgxMjUtLjk0MTQwNi0zMS4zNjMyODEtMy4wNDY4NzUtNTkuNjIxMDk0LTMuMDQ2ODc1LTU5IDAtOTkuMzc4OTA2IDM2LTk5LjM3ODkwNiAxMDIuMTQwNjI1djU3LjAzNTE1NmgtNjYuNXY3Ny41aDY2LjV2MTk4em0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" />
    <img style={{width:"28px",marginRight:"10px"}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMi4wMDAzOCIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTY5Ljk5NDAwMTA4MzQiIHgyPSIyOTkuNDkzNDEzNTkwNCIgeTE9IjcxLjk4NjIyNzAxIiB5Mj0iMzQ5LjA1NDg0NDg4NjQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYzNmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYjBlZCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGIwZWQiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYTJjZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2NC4yODI1MjM3ODI0IiB4Mj0iLTM3OS41ODY0MzI3MTE0IiB4bGluazpocmVmPSIjYiIgeTE9IjMxNC4wODY4MzYxMzU2IiB5Mj0iLTg0Ljk1MjE4MDgxNjYiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2LjAwMDMiIHgyPSIyNTYuMDAwMyIgeGxpbms6aHJlZj0iI2IiIHkxPSI0MzcuMzgzMjE1Mzg5IiB5Mj0iNTA0LjQ3MjAwOTcwNjQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDg5LjQyMDk5OTUxMzYiIHgyPSIyMzkuMjkzNzMyODIxNCIgeGxpbms6aHJlZj0iI2IiIHkxPSI0ODIuMDcyNDAxNjUwMiIgeTI9IjIzMS45NDUxMzQ5NTgiLz48cGF0aCBkPSJtNDIwLjQyMTg3NSA1MDMuMjM0Mzc1Yy0xMDkuNTAzOTA2IDExLjY4NzUtMjE5LjMzOTg0NCAxMS42ODc1LTMyOC44NDM3NSAwLTQzLjY2NDA2My00LjY2MDE1Ni03OC4xNTIzNDQtMzkuMTQ4NDM3LTgyLjgxMjUtODIuODE2NDA2LTExLjY4NzUtMTA5LjUwMzkwNy0xMS42ODc1LTIxOS4zMzU5MzggMC0zMjguODM5ODQ0IDQuNjYwMTU2LTQzLjY2NDA2MyAzOS4xNDg0MzctNzguMTUyMzQ0IDgyLjgxMjUtODIuODEyNSAxMDkuNTAzOTA2LTExLjY4NzUgMjE5LjMzNTkzNy0xMS42ODc1IDMyOC44Mzk4NDQgMCA0My42Njc5NjkgNC42NjAxNTYgNzguMTU2MjUgMzkuMTQ4NDM3IDgyLjgxNjQwNiA4Mi44MTI1IDExLjY4NzUgMTA5LjUwMzkwNiAxMS42ODc1IDIxOS4zMzU5MzcgMCAzMjguODM5ODQ0LTQuNjYwMTU2IDQzLjY2Nzk2OS0zOS4xNDQ1MzEgNzguMTU2MjUtODIuODEyNSA4Mi44MTY0MDZ6bTAgMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im00NzUuMzg2NzE5IDExMC4wOTc2NTZjLTQuMTMyODEzLTM4Ljc0NjA5NC0zNC43MzQzNzUtNjkuMzUxNTYyLTczLjQ4NDM3NS03My40ODgyODEtOTcuMTcxODc1LTEwLjM2NzE4Ny0xOTQuNjMyODEzLTEwLjM2NzE4Ny0yOTEuODA0Njg4IDAtMzguNzQ2MDk0IDQuMTM2NzE5LTY5LjM1MTU2MiAzNC43NDIxODctNzMuNDg4MjgxIDczLjQ4ODI4MS0xMC4zNjcxODcgOTcuMTcxODc1LTEwLjM2NzE4NyAxOTQuNjMyODEzIDAgMjkxLjgwMDc4MiA0LjEzNjcxOSAzOC43NSAzNC43NDIxODcgNjkuMzU1NDY4IDczLjQ4ODI4MSA3My40ODgyODEgOTcuMTcxODc1IDEwLjM3MTA5MyAxOTQuNjMyODEzIDEwLjM3MTA5MyAyOTEuODAwNzgyIDAgMzguNzUtNC4xMzI4MTMgNjkuMzU1NDY4LTM0LjczODI4MSA3My40ODgyODEtNzMuNDg4MjgxIDEwLjM3MTA5My05Ny4xNjc5NjkgMTAuMzcxMDkzLTE5NC42Mjg5MDcgMC0yOTEuODAwNzgyem0wIDAiIGZpbGw9InVybCgjYykiLz48cGF0aCBkPSJtNy42NzE4NzUgNDA5LjgwNDY4OGMuMzUxNTYzIDMuNTM5MDYyLjcxNDg0NCA3LjA3ODEyNCAxLjA5Mzc1IDEwLjYxNzE4NyA0LjY2MDE1NiA0My42NjQwNjMgMzkuMTQ4NDM3IDc4LjE1MjM0NCA4Mi44MTY0MDYgODIuODEyNSAxMDkuNTAzOTA3IDExLjY4NzUgMjE5LjMzNTkzOCAxMS42ODc1IDMyOC44Mzk4NDQgMCA0My42Njc5NjktNC42NjAxNTYgNzguMTUyMzQ0LTM5LjE0ODQzNyA4Mi44MTI1LTgyLjgxMjUuMzc4OTA2LTMuNTM5MDYzLjc0MjE4Ny03LjA3ODEyNSAxLjA5NzY1Ni0xMC42MTcxODd6bTAgMCIgZmlsbD0idXJsKCNkKSIvPjxwYXRoIGQ9Im01MTEuODkwNjI1IDIzOC4wMDc4MTItMTA2LjI3NzM0NC0xMDYuMjczNDM3Yy0xMS45MTAxNTYgNi44MDg1OTQtMjIuNDA2MjUgMTAuNTg1OTM3LTMwLjMxMjUgMTIuNjc5Njg3LTQuNDQ1MzEyIDEuMTkxNDA3LTguMDc0MjE5IDEuODM5ODQ0LTEwLjY4MzU5MyAyLjE5NTMxMy0xMS45ODQzNzYtMTIuMjg1MTU2LTI4LjcxODc1LTE5LjkxNDA2My00Ny4yNDIxODgtMTkuOTE0MDYzLTM2LjQ0NTMxMiAwLTY1Ljk5NjA5NCAyOS41NDY4NzYtNjUuOTk2MDk0IDY2IDAgMS4zMTY0MDcuMDM1MTU2IDIuNjE3MTg4LjEyMTA5NCAzLjkxNDA2My4xNzU3ODEgMy4xNjAxNTYuNTc4MTI1IDYuMjY1NjI1IDEuMTk5MjE5IDkuMjg1MTU2LTE1LjIxNDg0NC0uMjI2NTYyLTY0LjY2Nzk2OS00LjI4OTA2Mi0xMTEuODMyMDMxLTQ0LjcxODc1LS4wMDM5MDcgMC0uMDAzOTA3LS4wMDM5MDYtLjAwMzkwNy0uMDAzOTA2aC0uMDAzOTA2bC0yMi4yNDIxODctMjIuMjQ2MDk0cy0yNi4wOTM3NSA0NS41NDI5NjkgMTIuMjY5NTMxIDgwLjEwMTU2M2MxLjY4MzU5MyAxLjg3ODkwNiAzLjUzNTE1NiAzLjczNDM3NSA1LjU2MjUgNS41NTg1OTQuMTYwMTU2LjE3OTY4Ny4zMjgxMjUuMzU1NDY4LjQ4ODI4MS41MzUxNTYtNS4wMzUxNTYtLjMzOTg0NC0yMC4xNzk2ODgtMS44NDc2NTYtMjguOTQ1MzEyLTguMDM5MDYzIDAgMC0xLjc2MTcxOSAyNy44MzU5MzggMjEuNDI5Njg3IDQ4LjMyODEyNWwxOC43MjY1NjMgMTguODg2NzE5Yy01LjcwMzEyNi40NzI2NTYtMTIuMDExNzE5LjM1OTM3NS0xNi4zOTg0MzgtMS41NjI1IDAgMCAzLjg4MjgxMiAxNi40ODgyODEgMTguODkwNjI1IDI5LjY4MzU5NGwyNi4yMzQzNzUgMjYuMzcxMDkzYy0xNS43MzgyODEgOS4xNjc5NjktNDMuMjg5MDYyIDIwLjY0MDYyNi03OS41NTQ2ODggMTcuNzEwOTM4bDE1OS4xNDQ1MzIgMTU1LjVjNTQuNjc5Njg3LS4wMTU2MjUgMTA5LjM1OTM3NS0yLjkzNzUgMTYzLjk1NzAzMS04Ljc2NTYyNSA0My42Njc5NjktNC42NjAxNTYgNzguMTU2MjUtMzkuMTQ4NDM3IDgyLjgxNjQwNi04Mi44MTI1IDYuNDgwNDY5LTYwLjc0MjE4NyA5LjM1OTM3NS0xMjEuNTg1OTM3IDguNjUyMzQ0LTE4Mi40MTQwNjN6bTAgMCIgZmlsbD0idXJsKCNlKSIvPjxwYXRoIGQ9Im00MTQuNjgzNTk0IDE1Ny4zNjcxODhjLTExLjMyODEyNSA1LjkyNTc4MS0yOC4zOTA2MjUgOC42NjQwNjItMzQuMDQ2ODc1IDkuNDUzMTI0LS4wNDY4NzUtLjI3MzQzNy0uMDkzNzUtLjUzNTE1Ni0uMTQwNjI1LS43OTY4NzQgMTkuMjMwNDY4LTExLjg5NDUzMiAyNS4xMTcxODctMzQuMjg5MDYzIDI1LjExNzE4Ny0zNC4yODkwNjMtMTEuOTEwMTU2IDYuODA4NTk0LTIyLjQwNjI1IDEwLjU4NTkzNy0zMC4zMTI1IDEyLjY3OTY4Ny00LjQ0NTMxMiAxLjE5MTQwNy04LjA3NDIxOSAxLjgzNTkzOC0xMC42ODM1OTMgMi4xOTUzMTMtMTEuOTg0Mzc2LTEyLjI4OTA2My0yOC43MTg3NS0xOS45MTQwNjMtNDcuMjQyMTg4LTE5LjkxNDA2My0zNi40NDUzMTIgMC02NS45OTYwOTQgMjkuNTQyOTY5LTY1Ljk5NjA5NCA2NiAwIDEuMzEyNS4wMzUxNTYgMi42MTcxODguMTIxMDk0IDMuOTEwMTU3LjE3NTc4MSAzLjE2MDE1Ni41NzgxMjUgNi4yNjU2MjUgMS4xOTkyMTkgOS4yODUxNTYtMTcuNjQwNjI1LS4yNjE3MTktODEuMzE2NDA3LTUuNjcxODc1LTEzNC4wODIwMzEtNjYuOTY0ODQ0IDAgMC0yOS4zODI4MTMgNTEuMjY1NjI1IDIwLjAxNTYyNCA4Ni4yODUxNTcgMCAwLTIwLjAxNTYyNC0uNjI1LTMwLjY0MDYyNC04LjEyODkwNyAwIDAtMy4xMjUgNDkuMzk4NDM4IDUzLjc2OTUzMSA2NS4wMjM0MzggMCAwLTIwLjAwMzkwNyA1LjAwNzgxMi0zMC4wMTU2MjUuNjI4OTA2IDAgMCAxMC4wMDc4MTIgNDIuNTE1NjI1IDYwLjAyNzM0NCA0NS42NDg0MzcgMCAwLTM1Ljg3NSAzMi44NDM3NS05NC40NTcwMzIgMjguMTE3MTg4IDI4LjgxMjUgMTguMjQyMTg4IDYyLjk3MjY1NiAyOC44MDA3ODEgOTkuNTk3NjU2IDI4LjgwMDc4MSAxMDIuOTgwNDY5IDAgMTg2LjQ2NDg0NC04My40ODA0NjkgMTg2LjQ2NDg0NC0xODYuNDYwOTM3IDAtMS4yODUxNTYtLjAxMTcxOC0yLjU3MDMxMy0uMDM5MDYyLTMuODU1NDY5LjAyNzM0NC0uNzYxNzE5LjAzOTA2Mi0xLjUxOTUzMS4wMzkwNjItMi4yODkwNjMgMC0uNTM1MTU2LS4wMTE3MTgtMS4wNzAzMTItLjAxOTUzMS0xLjYwNTQ2OCAxOS4wMzkwNjMtMTIuNjg3NSAzMS4zMjQyMTktMzMuNzIyNjU2IDMxLjMyNDIxOS0zMy43MjI2NTZ6bTAgMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />
    </div>

      {isAuth ?
        <header>
          
          <nav className="navbar navbar-expand-lg navbar-light"  >
            <div className="container-fluid"><img src={Web} height="50px" width="50px" alt="img6" /> <a className="navbar-brand name" href="#">KARTSHOP<span ><img src="https://img.icons8.com/color/48/000000/trasnfergo.png"/></span></a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"> <a className="nav-link " aria-current="page" href="/"><span className="home">Home</span></a> </li>
                  <li className="nav-item"> <a className="nav-link " href="/products">Products</a></li>
                  <li className="nav-item"> <a className="nav-link" href="/livraison">Livraison</a> </li>
              
                  <li className="nav-item"> <a className="nav-link" href="/contacts">Contact</a> </li>
                </ul><div className="align">
                  <div className="align1"> <a href='/commande' >   Shopping-Cart <span className="badge badge-light" style={{ backgroundColor: "red" }}>{paniers.length}</span></a></div>
                  <div className="align2">    Hello!{user.name}   </div>
                  <div>  <Dropdown >
                    <Dropdown.Toggle variant='null' id="dropdown-autoclose-true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi-bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {user.isAdmin?<Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>:<Dropdown.Item href="/profile">Profile</Dropdown.Item>}
                     
                      <Dropdown.Item href="" onClick={() => { dispatch(logoutUser()); history.push("/"); }}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></div></div>

              </div>
            </div>

          </nav>
        </header>
         :
        <header>
          
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid"><img src={Web} height="50px" width="50px" margin-left="5px" alt='img' /> <a className="navbar-brand name" href="#">KARTSHOP<span className="go"><img src="https://img.icons8.com/color/48/000000/trasnfergo.png"/></span></a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"> <a className="nav-link " aria-current="page" href="/"><span className="home">Home</span></a> </li>
                  <li className="nav-item"> <a className="nav-link " href="/products">Products</a></li>
                  <li className="nav-item"> <a className="nav-link" href="/livraison">Livraison</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/contacts">Contact</a> </li>
                </ul>
                <Link to="signin">
                  <div className="btn btn-info">Sign in/Sign up </div></Link>
              </div>
            </div>
          </nav>
        </header>}
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signup} />
        <Route path='/products' component={Products} />
        <Route path='/livraison' component={Livraison} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/commande' component={ListCommand} />
        <Route path='/profile' component={Profile} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='*' component={NotFound} />
      </Switch>
      <div>
        <footer className="text-light">
          <div className="containerr">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3">
                <h5>About</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                <p className="mb-0">
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h5>Informations</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                <ul className="list-unstyled">
                  <li><a href><img style={{width:"33px"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAgNTEwIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjE4Ljk3MyIgeDI9IjM4MC4yNyIgeTE9IjE1OC4zMzYiIHkyPSI1MDQuNjA4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlM2U1ZTQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjYmQwZTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGcxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYmVmZjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlM2U1ZTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjA3LjA0MyIgeDI9IjI5MC4zNTMiIHhsaW5rOmhyZWY9IiNsZzEiIHkxPSIzODEuNjQ3IiB5Mj0iNDY0Ljk1NyIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGcyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjYmQwZTQiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZhN2Q4MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTUiIHgyPSIyNTUiIHhsaW5rOmhyZWY9IiNsZzIiIHkxPSIzOTUuMDk3IiB5Mj0iNDgwLjY0NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGczIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjYzN2IiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOTAyMTciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTcuMzMzIiB4Mj0iNTguMDIyIiB4bGluazpocmVmPSIjbGczIiB5MT0iMjU1IiB5Mj0iMjU1Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MTkuOTU5IiB4Mj0iMzU3LjI5MiIgeGxpbms6aHJlZj0iI2xnMiIgeTE9IjI1NC4wNTIiIHkyPSIxODguMDUyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF82XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0ODMuMzMzIiB4Mj0iNTE0LjY2NyIgeGxpbms6aHJlZj0iI2xnMyIgeTE9IjI1NSIgeTI9IjI1NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGc0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmOTAyMTciIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjI2NjkiIHN0b3AtY29sb3I9IiNlNzAxMGYiIHN0b3Atb3BhY2l0eT0iLjI2NyIvPjxzdG9wIG9mZnNldD0iLjcyMzIiIHN0b3AtY29sb3I9IiNjZTAwMDQiIHN0b3Atb3BhY2l0eT0iLjcyMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M1MDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MDAuNzY3IiB4Mj0iNDU4Ljc2NyIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjE2OS41NDgiIHkyPSIxMjIuMDQ4Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF84XyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5NzEuMjMzIDApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk2MiIgeDI9IjkyMCIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjE2OS41NDgiIHkyPSIxMjIuMDQ4Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzQuNDA2IiB4Mj0iMzQ2LjE4OSIgeGxpbms6aHJlZj0iI2xnMSIgeTE9IjU0LjA2MSIgeTI9IjE4OS42OTEiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEwXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNjEuMDI2IiB4Mj0iMzkwLjM2IiB4bGluazpocmVmPSIjbGczIiB5MT0iOTAuNTc0IiB5Mj0iMzA4LjU3NCIvPjxnPjxwYXRoIGQ9Im00NjIuMzkzIDQ1OS4yODJoLTQxNC43ODZjLTE2LjM1MSAwLTI5LjYwNy0xMy4yNTYtMjkuNjA3LTI5LjYwOGwtMTgtMzQ5LjM0OWMwLTE2LjM1MiAxMy4yNTYtMjkuNjA3IDI5LjYwNy0yOS42MDdoNDUwLjc4NWMxNi4zNTIgMCAyOS42MDcgMTMuMjU2IDI5LjYwNyAyOS42MDdsLTE4IDM0OS4zNDljLjAwMSAxNi4zNTItMTMuMjU1IDI5LjYwOC0yOS42MDYgMjkuNjA4eiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48cGF0aCBkPSJtNDgwLjM5MyA0NTkuMjgyaC00NTAuNzg2Yy0xNi4zNTEgMC0yOS42MDctMTMuMjU2LTI5LjYwNy0yOS42MDggMC04LjI1OCAzLjQxLTE2LjE0OSA5LjQyMy0yMS44MDhsMjIyLjU4NS0yMDkuNDY1YzEyLjkxOC0xMi4xNTYgMzMuMDY2LTEyLjE1NiA0NS45ODQgMGwyMjIuNTg1IDIwOS40NjVjNi4wMTQgNS42NTkgOS40MjMgMTMuNTUgOS40MjMgMjEuODA4IDAgMTYuMzUyLTEzLjI1NiAyOS42MDgtMjkuNjA3IDI5LjYwOHoiIGZpbGw9InVybCgjU1ZHSURfMl8pIi8+PHBhdGggZD0ibTQuMjM1IDM1Mi45NjN2NzYuNzExYzAgMTYuMzUyIDEzLjAzNiAyOS42MDcgMjkuMTE2IDI5LjYwN2g0NDMuMjk4YzE2LjA4IDAgMjkuMTE2LTEzLjI1NiAyOS4xMTYtMjkuNjA3di03Ni43MTF6IiBmaWxsPSJ1cmwoI1NWR0lEXzNfKSIvPjxwYXRoIGQ9Im0wIDgwLjMyNnYzNDkuMzQ5YzAgMTYuMzUyIDEzLjI1NiAyOS42MDcgMjkuNjA3IDI5LjYwN2gxOS4xNnYtNDA4LjU2NGgtMTkuMTZjLTE2LjM1MSAwLTI5LjYwNyAxMy4yNTYtMjkuNjA3IDI5LjYwOHoiIGZpbGw9InVybCgjU1ZHSURfNF8pIi8+PHBhdGggZD0ibTEwLjQyMyAxMDIuMTMzIDM4MS41NzcgMzU3LjE0OWg4OC4zOTNjMTYuMzUyIDAgMjkuNjA3LTEzLjI1NiAyOS42MDctMjkuNjA3di0zNDkuMzQ5YzAtMTYuMzUyLTEzLjI1Ni0yNy42MDctMjkuNjA3LTI3LjYwN2gtNDUwLjc4NmMtMTYuMzUxLS4wMDEtMjguNjA3IDExLjI1NS0yOC42MDcgMjcuNjA3IDAgOC4yNTcgMy40MSAxNi4xNDggOS40MjMgMjEuODA3eiIgZmlsbD0idXJsKCNTVkdJRF81XykiLz48cGF0aCBkPSJtNTEwIDgwLjMyNnYzNDkuMzQ5YzAgMTYuMzUyLTEzLjI1NiAyOS42MDctMjkuNjA3IDI5LjYwN2gtMTkuMTZ2LTQwOC41NjRoMTkuMTZjMTYuMzUxIDAgMjkuNjA3IDEzLjI1NiAyOS42MDcgMjkuNjA4eiIgZmlsbD0idXJsKCNTVkdJRF82XykiLz48cGF0aCBkPSJtNDgwLjM5MyA1Mi43MThoLTE5LjE2djE4MC45OTZoNDguNzY3di0xNTEuMzg4YzAtMTYuMzUyLTEzLjI1Ni0yOS42MDgtMjkuNjA3LTI5LjYwOHoiIGZpbGw9InVybCgjU1ZHSURfN18pIi8+PHBhdGggZD0ibTI5LjYwNyA1Mi43MThoMTkuMTZ2MTgwLjk5NmgtNDguNzY3di0xNTEuMzg4YzAtMTYuMzUyIDEzLjI1Ni0yOS42MDggMjkuNjA3LTI5LjYwOHoiIGZpbGw9InVybCgjU1ZHSURfOF8pIi8+PHBhdGggZD0ibTQ4MC4zOTMgNTAuNzE4aC00NTAuNzg2Yy0xNi4zNTEgMC0yOS42MDcgMTMuMjU2LTI5LjYwNyAyOS42MDggMCA4LjI1OCAzLjQxIDEzLjE0OSA5LjQyMyAxOC44MDhsMjIyLjU4NSAyMDkuNDY1YzEyLjkxOCAxMi4xNTYgMzMuMDY2IDEyLjE1NiA0NS45ODQgMGwyMjIuNTg1LTIwOS40NjZjNi4wMTMtNS42NTkgOS40MjMtMTAuNTUgOS40MjMtMTguODA3IDAtMTYuMzUyLTEzLjI1Ni0yOS42MDgtMjkuNjA3LTI5LjYwOHoiIGZpbGw9InVybCgjU1ZHSURfOV8pIi8+PHBhdGggZD0ibTQ3OS43NzUgNTAuNzE4Yy0xLjE3OSAwLTIuMzEzLjQ1LTMuMTcxIDEuMjU3bC0xOTguNjEyIDE4Ni45MDZjLTEyLjkxOCAxMi4xNTYtMzMuMDY2IDEyLjE1Ni00NS45ODQgMGwtMTk4LjYxMS0xODYuOTA1Yy0uODU4LS44MDgtMS45OTMtMS4yNTgtMy4xNzEtMS4yNTgtMTUuMTA3IDAtMjguMjQ4IDExLjA3OS0zMC4wMTggMjYuMDgyLTEuMTIxIDkuNTAzIDIuMzUxIDE4Ljg3MyA5LjIxNiAyNS4zMzNsMjIyLjU4NSAyMDkuNDY1YzEyLjkxOCAxMi4xNTYgMzMuMDY2IDEyLjE1NiA0NS45ODQgMGwyMjIuNTg1LTIwOS40NjVjNi44NjUtNi40NjEgMTAuMzM3LTE1LjgzIDkuMjE2LTI1LjMzMy0xLjc3MS0xNS4wMDMtMTQuOTEyLTI2LjA4Mi0zMC4wMTktMjYuMDgyeiIgZmlsbD0idXJsKCNTVkdJRF8xMF8pIi8+PC9nPjwvc3ZnPg==" /></a></li>
                  <li><a href><img style={{width:"33px"}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojREM0NzJFOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2My4yNTksMjkxLjczNGMtMC4wMS0xLjctMC41MS0zLjQ3LTEuMTQtNS4wNmMtMC44NC0yLjA5LTIuNjQtMy4xMy00LjktMy4zNQ0KCQkJYy0yLjY1LTAuMjYtNC43NywwLjgxLTYuNjksMi41MWMtMC43NywwLjY3LTEuMTIsMS42Ny0xLjEyLDEuNjdsMC4wNCw1My45N3YxLjMzYzAsMCwwLjQ2LDAuNjIsMC41MywwLjcNCgkJCWMxLjU2LDEuNjksMy4zOCwzLjAzLDUuNzEsMy41MWMzLjg0LDAuNzksNi41NS0wLjgxLDcuMy00LjM3YzAuMTktMC44OSwwLjMtMS44MSwwLjMtMi43Mg0KCQkJQzI2My4zMDksMzIzLjg1NCwyNjMuMzM5LDMwNy43OTQsMjYzLjI1OSwyOTEuNzM0eiBNMjYzLjI1OSwyOTEuNzM0Yy0wLjAxLTEuNy0wLjUxLTMuNDctMS4xNC01LjA2DQoJCQljLTAuODQtMi4wOS0yLjY0LTMuMTMtNC45LTMuMzVjLTIuNjUtMC4yNi00Ljc3LDAuODEtNi42OSwyLjUxYy0wLjc3LDAuNjctMS4xMiwxLjY3LTEuMTIsMS42N2wwLjA0LDUzLjk3djEuMzMNCgkJCWMwLDAsMC40NiwwLjYyLDAuNTMsMC43YzEuNTYsMS42OSwzLjM4LDMuMDMsNS43MSwzLjUxYzMuODQsMC43OSw2LjU1LTAuODEsNy4zLTQuMzdjMC4xOS0wLjg5LDAuMy0xLjgxLDAuMy0yLjcyDQoJCQlDMjYzLjMwOSwzMjMuODU0LDI2My4zMzksMzA3Ljc5NCwyNjMuMjU5LDI5MS43MzR6IE0zMjMuNjg5LDIxMC4zNDRjLTYzLjg3LTEuMzctMTI3Ljc3LTEuMzctMTkxLjY1LDANCgkJCWMtMjIuMTYsMC40Ny0zOS44OCwxOC41OS0zOS44OCw0MC43NnY5OS43NmMwLDIyLjE4LDE3LjcyLDQwLjMsMzkuODgsNDAuNzdjNjMuODgsMS4zNywxMjcuNzgsMS4zNywxOTEuNjUsMA0KCQkJYzIyLjE3LTAuNDcsMzkuODktMTguNTksMzkuODktNDAuNzd2LTk5Ljc2QzM2My41NzksMjI4LjkzNSwzNDUuODU5LDIxMC44MTQsMzIzLjY4OSwyMTAuMzQ0eiBNMTUwLjc5OSwzNTkuOTU1aC0xOC40MnYtMTA0LjEzDQoJCQloLTE5LjA3di0xNy40Mmg1Ni42djE3LjM4aC0xOS4xMVYzNTkuOTU1eiBNMjE2LjcxOSwzMTYuNzM0djQzLjIzaC0xNi4zMXYtOS44OGMtMC41OSwwLjYzLTAuOTIsMC45Ny0xLjIzLDEuMzINCgkJCWMtMy41MSwzLjk2LTcuNDksNy4yNi0xMi41Nyw5LjAxYy0yLjQ4LDAuODUtNS4wMywxLjE0LTcuNjQsMC42OWMtMy41Ni0wLjU5LTUuOTUtMi42NC03LjM5LTUuODhjLTEuMzQtMi45OS0xLjY4LTYuMTktMS42OS05LjQxDQoJCQljLTAuMDQtMTEuOS0wLjAyLTc0Ljg4LTAuMDItNzUuNDloMTYuMjdjMC4wMywwLjU1LDAuMDksNDUuNzYsMC4xLDY3LjgxYzAsMS4yLDAuMDEsMi40MywwLjI1LDMuNmMwLjYsMi45NiwyLjg3LDQuMjMsNS43MiwzLjE5DQoJCQljMy4yOC0xLjIsNS43OC0zLjQ2LDcuODgtNi4xN2MwLjMxLTAuMzksMC4zMS0xLjA5LDAuMzEtMS42NXYtNjYuODhsMTYuMzItMC4wNEMyMTYuNzE5LDI3MC4xODUsMjE2LjcxOSwzMDEuNzU0LDIxNi43MTksMzE2LjczNA0KCQkJeiBNMjc4Ljc2OSwzNTEuMzI0Yy0yLjE4LDYuNTYtNi45OCw5LjktMTMuODgsOS44M2MtNS42MS0wLjA1LTEwLjE2LTIuMjgtMTMuOTEtNi4zNWMtMC40Mi0wLjQ1LTEuNTgtMS42OC0xLjU4LTEuNjh2Ni44MmgtMTYuMzQNCgkJCXYtMTIxLjU1aDE2LjM0YzAsMTIuOTQsMCw0MC4wMSwwLDQwLjAxczAuOTItMS44NCwxLjc2LTIuNzljMi41My0yLjgzLDUuNjEtNS4wMiw5LjQxLTUuOThjNi4yNy0xLjU3LDEzLjUsMC4zNywxNi45NCw3LjcNCgkJCWMyLjAzLDQuMzMsMi42LDguOTUsMi42LDEzLjY1YzAuMDMsMTYuOTksMC4wMywzMy45OCwwLjAxLDUwLjk3QzI4MC4xMDksMzQ1LjEzNCwyNzkuNzc5LDM0OC4yNzUsMjc4Ljc2OSwzNTEuMzI0eg0KCQkJIE0zMzkuMTE5LDM0Ny45MDVjLTIuODMsOC4yOS04LjY4LDEyLjg5LTE3LjI2LDE0LjE1Yy01LjMyLDAuNzgtMTAuNTksMC42Ny0xNS41OC0xLjU5Yy02LjgzLTMuMDgtMTAuNy04LjY1LTEyLjM2LTE1Ljc0DQoJCQljLTAuNzctMy4zLTEuMTUtNi43Ni0xLjE5LTEwLjE1Yy0wLjEzLTEzLjMxLTAuMDctMjYuNjMtMC4wNC0zOS45NGMwLjAxLTYuOTYsMS42Ny0xMy4zOCw2LjQ0LTE4LjcxDQoJCQljNS40NC02LjA5LDEyLjQtOC4zNiwyMC4zNS03Ljg1YzIuMzksMC4xNSw0LjgzLDAuNTQsNy4xLDEuMjljNy43MywyLjU0LDExLjg2LDguMzMsMTMuNDgsMTYuMDFjMC42MiwyLjk2LDAuODUsNi4wMywwLjksOS4wNg0KCQkJYzAuMTMsNy4xLTAuMDUsMjIuNzUtMC4wNSwyMi43NWgtMzEuMjl2MjIuNDNjMCw0LjAzLDMuMjYsNy4yOSw3LjI5LDcuMjljNC4wMiwwLDcuMjgtMy4yNiw3LjI4LTcuMjl2LTExLjUzaDE2LjgxDQoJCQlDMzQwLjk5OSwzMjguMDg0LDM0MS4yNDksMzQxLjY5NSwzMzkuMTE5LDM0Ny45MDV6IE0zMjQuMTg5LDI5MC42ODVjMC00LjAyLTMuMjYtNy4yOS03LjI4LTcuMjljLTQuMDMsMC03LjI5LDMuMjctNy4yOSw3LjI5DQoJCQl2MTIuNTloMTQuNTdWMjkwLjY4NXogTTI2Mi4xMTksMjg2LjY3NWMtMC44NC0yLjA5LTIuNjQtMy4xMy00LjktMy4zNWMtMi42NS0wLjI2LTQuNzcsMC44MS02LjY5LDIuNTENCgkJCWMtMC43NywwLjY3LTEuMTIsMS42Ny0xLjEyLDEuNjdsMC4wNCw1My45N3YxLjMzYzAsMCwwLjQ2LDAuNjIsMC41MywwLjdjMS41NiwxLjY5LDMuMzgsMy4wMyw1LjcxLDMuNTENCgkJCWMzLjg0LDAuNzksNi41NS0wLjgxLDcuMy00LjM3YzAuMTktMC44OSwwLjMtMS44MSwwLjMtMi43MmMwLjAyLTE2LjA3LDAuMDUtMzIuMTMtMC4wMy00OC4xOQ0KCQkJQzI2My4yNDksMjkwLjAzNCwyNjIuNzQ5LDI4OC4yNjQsMjYyLjExOSwyODYuNjc1eiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMwMy44ODcsOTQuOTlsLTAuMDA1LDkwLjI0NEgyODcuMTZsMC4wMi05LjY5NWMtMS44NDksMS44MjEtMy40MjcsMy41MjItNS4xNjEsNS4wNQ0KCQkJYy0zLjA3NCwyLjcwOC02LjU1Niw0LjcyNy0xMC42MjksNS41MjRjLTYuMjUzLDEuMjIzLTExLjU3OS0wLjc1NC0xMy41NzMtNy4yM2MtMC42NjQtMi4xNTctMS4wNjUtNC40ODItMS4wODItNi43MzRWOTQuOTkNCgkJCWgxNi41OTZ2NjguODIxYzAsMC45MTIsMC4wNzMsMS44MzQsMC4yMzMsMi43MjhjMC41MDQsMi44MzYsMi42LDQuMTcxLDUuMzMxLDMuMjI0YzMuMzI5LTEuMTUyLDUuODY5LTMuNDU3LDguMDI0LTYuMTczDQoJCQljMC4zMDYtMC4zODgsMC4yNTEtMS4xMTIsMC4yNTEtMS42ODFWOTQuOTlIMzAzLjg4N3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNjUuNTc4LDExMC42NzJjLTMuNjMtMTUuMzAxLTExLjIzNS00Ny42MDItMTEuMjM1LTQ3LjYwMmgtMTkuMDI5DQoJCQljMCwwLDE0LjYyLDQ4LjQ4NywyMS4xNTgsNzAuMTExYzAuMjM1LDAuNzgyLDAuMzQzLDEuNjMxLDAuMzQzLDIuNDVsLTAuMDA3LDQ5LjU4NGgxNy41NDdsLTAuMDA3LTQ5LjU4NA0KCQkJYzAtMC44MTksMC4xMDgtMS42NjgsMC4zNDMtMi40NWM2LjUzOC0yMS42MjQsMjEuMTU4LTcwLjExMSwyMS4xNTgtNzAuMTExSDE3Ni44MmMwLDAtNy42MDYsMzIuMzAxLTExLjIzNSw0Ny42MDJIMTY1LjU3OHoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMTguNzUyLDkyLjczMUwyMTguNzUyLDkyLjczMWMtMTMuMjI0LDAtMjMuOTQ0LDEwLjcyLTIzLjk0NCwyMy45NDR2NDYuODU5DQoJCQljMCwxMy4yMjQsMTAuNzIsMjMuOTQ0LDIzLjk0NCwyMy45NDRoMGMxMy4yMjQsMCwyMy45NDQtMTAuNzIsMjMuOTQ0LTIzLjk0NHYtNDYuODU5DQoJCQlDMjQyLjY5NywxMDMuNDUxLDIzMS45NzYsOTIuNzMxLDIxOC43NTIsOTIuNzMxeiBNMjI1LjY2MiwxNjQuNDhjMCwzLjgxLTMuMSw2LjkwOS02LjkwOSw2LjkwOXMtNi45MDktMy4wOTktNi45MDktNi45MDl2LTQ4Ljc1Mg0KCQkJYzAtMy44MSwzLjEtNi45MDksNi45MDktNi45MDlzNi45MDksMy4xLDYuOTA5LDYuOTA5VjE2NC40OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                  </a></li>
                  <li><a href><img style={{width:"33px"}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNCA1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNCA1MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzc3LjYsMEgxMjZDNTYuOCwwLDAsNTYuOCwwLDEyNi40VjM3OGMwLDY5LjIsNTYuOCwxMjYsMTI2LDEyNmgyNTEuNmM2OS42LDAsMTI2LjQtNTYuOCwxMjYuNC0xMjYuNFYxMjYuNA0KCQkJQzUwNCw1Ni44LDQ0Ny4yLDAsMzc3LjYsMHogTTMxOS42LDI1MkgyNzJ2MTU2aC02MFYyNTJoLTMydi02NGgyOHYtMjcuMmMwLTI1LjYsMTIuOC02Niw2Ni44LTY2SDMyNFYxNDhoLTM0LjgNCgkJCWMtNS42LDAtMTMuMiwzLjYtMTMuMiwxNnYyNGg0OS4yTDMxOS42LDI1MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></a></li>
                  <li><a href><img style={{width:"33px"}} src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a></li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h5>Others links</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                <ul className="list-unstyled">
                  <li><a href=""><img src="https://img.icons8.com/color/48/000000/amazon.png"/></a></li>
                  <li><a href=""><img src="https://img.icons8.com/color/48/000000/shopify.png"/></a></li>
                  <li><a href=""><img src="https://img.icons8.com/color/48/000000/ebay.png"/></a></li>
                  <li><a href=""><img src="https://img.icons8.com/carbon-copy/100/000000/paypal-app.png"/></a></li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3">
                <h5>Contact</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                <ul className="list-unstyled">
                  <li><i className="fa fa-home mr-2" /> My company</li>
                  <li><i className="fa fa-envelope mr-2" /> email@example.com</li>
                  <li><i className="fa fa-phone mr-2" /> + 33 12 14 15 16</li>
                  <li><i className="fa fa-print mr-2" /> + 33 12 14 15 16</li>
                </ul>
              </div>
              <div className="col-12 copyright mt-3">
                <p className="float-left">
                  <a href="#">Back to top</a>
                </p>
                <p className="text">created by Aymen Meddeb </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
