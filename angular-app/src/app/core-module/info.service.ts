import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  info: string
  error: string

  setError(error: string) {
    console.log(error) 
    this.info = null
    this.error = error
  }

  setErrorResponse(response: any) {
    console.log(response) 
    this.info = null
    this.error = response.error
  }

  setInfo(info: string) {
    console.log(info) 
    this.info = info
    this.error = null
  }

  clear() {
    this.info = null
    this.error = null
  }
}