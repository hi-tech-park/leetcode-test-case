export class BrowserHistory {
  constructor(homepage: string) {}

  visit(url: string): void {}

  back(steps: number): string {}

  forward(steps: number): string {}

}