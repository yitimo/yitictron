import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
    private searchHistory: string[];
    constructor() {
        const stored = window.localStorage.getItem('musix-search-history');
        if (stored) {
            this.searchHistory = stored.split('&musix&').filter((s) => s.length);
        } else {
            this.searchHistory = [];
        }
    }
    /**
     * get search histories
     */
    public get(): string[] {
        return this.searchHistory;
    }
    /**
     * add words to the top of histories
     * no more than 10, or will give up the most previously one
     * @param words search words
     */
    public set(words: string): void {
        if (words === '&musix&') {
            console.log('history', 'cheat option');
            return;
        }
        if (this.searchHistory.length > 9) {
            this.searchHistory = this.searchHistory.concat([words], this.searchHistory.slice(0, 9));
            window.localStorage.setItem('musix-search-history', this.searchHistory.join('&musix&'));
        } else {
            this.searchHistory.unshift(words);
        }
    }
    /**
     * index to splice or words to find index then splice
     * @param indexOrWords number as index & string as words
     */
    public remove(indexOrWords: number | string) {
        if (typeof indexOrWords === 'number') {
            this.searchHistory.splice(indexOrWords, 1);
        } else {
            this.searchHistory.splice(this.searchHistory.indexOf(indexOrWords), 1);
        }
        window.localStorage.setItem('musix-search-history', this.searchHistory.join('&musix&'));
    }
    /**
     * remove all search histories
     */
    public clear() {
        this.searchHistory = [];
        window.localStorage.removeItem('musix-search-history');
    }
}
