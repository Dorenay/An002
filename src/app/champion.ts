export class Champion {
    private _name: string;
    private _history : string = 'still nothing';
    private _role: string;

    get role(){
        return this._role;
    }
    set role(role){
        this._role = role;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    
    get history(){
        return this._history;
    }
    set history(history){
        this._history = history;
    }
    constructor (champName:string, champRole: string, champHistory?: string){
        this._role = champRole;
        this._name = champName;
        this._history = champHistory;
    };
}