export default {
  input: 'dist/src/index.js',
  external: ['@angular/core', '@angular/common'],
  output: {
    file: 'dist/bundles/sortableDataGrid.umd.js',
    format: 'umd',
    sourcemap: false,
    name: 'ng.sortableDataGrid',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }
}
