# vite-vui-poc

## INTRODUCTION

The HelloWorld demo based on VUI (Vue 3) with Vite 5. Try [StackBlitz](https://stackblitz.com/github/v-poc/vui-poc?file=package.json) or try [vui-poc SFC playground](https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aW1nXG4gICAgYWx0PVwiVnVlIGxvZ29cIlxuICAgIHNyYz1cImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiXG4gICAgQGNsaWNrPVwic2hvd1BvcHVwKHRydWUpXCJcbiAgLz5cbiAgPCEtLSBTVEFSVCBWVGFnIC0tPlxuICA8c2VjdGlvbj5cbiAgICA8di10YWdcbiAgICAgIHR5cGU9XCJmaWxsXCJcbiAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgIGZpbGwtY29sb3I9XCIjMzZDXCJcbiAgICAgIGZvbnQtY29sb3I9XCIjRkZGXCJcbiAgICAgIEBjbGljaz1cInNob3dQb3B1cCh0cnVlKVwiXG4gICAgPkhlbGxvIFZVSTwvdi10YWc+XG4gIDwvc2VjdGlvbj5cbiAgPCEtLSBFTkQgVlRhZyAtLT5cbiAgPCEtLSBTVEFSVCBWUHJvZ3Jlc3MgLS0+XG4gIDx2LXByb2dyZXNzLWNpcmN1bGFyXG4gICAgOnNpemU9XCI4MFwiXG4gICAgOmNvbG9yPVwic3RhdGUuc3Ryb2tlQ29sb3JcIlxuICAgIDp2YWx1ZT1cInN0YXRlLmNvdW50IC8gMTBcIlxuICAgIDp3aWR0aD1cIjVcIlxuICAgIDpkdXJhdGlvbj1cIjUwMFwiXG4gICAgaXMtYW5pbWF0ZWRcbiAgICBAY2xpY2s9XCJzaG93UG9wdXAodHJ1ZSlcIlxuICA+XG4gICAgPHYtYW1vdW50XG4gICAgICA6dmFsdWU9XCJzdGF0ZS5jb3VudCAqIDEwXCJcbiAgICAgIDpwcmVjaXNpb249XCIwXCJcbiAgICAgIGlzLWFuaW1hdGVkXG4gICAgPjwvdi1hbW91bnQ+XG4gICAgPHNwYW4gY2xhc3M9XCJ1bml0XCI+JTwvc3Bhbj5cbiAgPC92LXByb2dyZXNzLWNpcmN1bGFyPlxuICA8IS0tIEVORCBWUHJvZ3Jlc3MgLS0+XG4gIDwhLS0gU1RBUlQgVlBvcHVwIC0tPlxuICA8di1wb3B1cFxuICAgIHBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICB2LW1vZGVsOnZhbHVlPVwic3RhdGUuaXNTaG93UG9wdXBUaXRsZUJhclwiXG4gID5cbiAgICA8di1wb3B1cC10aXRsZS1iYXJcbiAgICAgIHRpdGxlPVwiSGVsbG8gVnVlIDMuMFwiXG4gICAgICBkZXNjcmliZT1cIk9uZSBQaWVjZS5cIlxuICAgICAgb2stdGV4dD1cIm9rXCJcbiAgICAgIGNhbmNlbC10ZXh0PVwiY2FuY2VsXCJcbiAgICAgIEBjb25maXJtPVwic3RhdGUuaXNTaG93UG9wdXBUaXRsZUJhcj1mYWxzZVwiXG4gICAgICBAY2FuY2VsPVwic3RhdGUuaXNTaG93UG9wdXBUaXRsZUJhcj1mYWxzZVwiXG4gICAgPjwvdi1wb3B1cC10aXRsZS1iYXI+XG4gICAgPGRpdiBjbGFzcz1cInYtZXhhbXBsZS1wb3B1cC1ib3R0b21cIj5cbiAgICAgIDx2LWN1YmUtYW5pbVxuICAgICAgICA6c2NhbGU9XCIxLjJcIlxuICAgICAgICBmcm9udD1cIlZ1ZTNcIlxuICAgICAgICBiYWNrPVwiVml0ZVwiXG4gICAgICAgIGJvdHRvbT1cIlNhc3NcIlxuICAgICAgICByaWdodD1cIlZVSVwiXG4gICAgICAgIEBjbGljaz1cInNob3dQb3B1cCh0cnVlKVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSAjdG9wPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92dWVqcy5vcmcvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNsZWZ0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2LWV4YW1wbGUtb3AtY3ViZVwiPlxuICAgICAgICAgICAgPHYtb25lLXBpZWNlIDpzY2FsZT1cIjAuOFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtY3ViZS1hbmltPlxuICAgIDwvZGl2PlxuICA8L3YtcG9wdXA+XG4gIDwhLS0gRU5EIFZQb3B1cCAtLT5cbiAgPCEtLSBTVEFSVCBWTGFuZHNjYXBlIC0tPlxuICA8di1sYW5kc2NhcGVcbiAgICB2LW1vZGVsOnZhbHVlPVwic3RhdGUuaXNTaG93UG9wdXBcIlxuICAgIG1hc2stY2xvc2FibGVcbiAgICA6c2hvdy1jbG9zZT1cImZhbHNlXCJcbiAgICB0cmFuc2l0aW9uPVwidi1ib3VuY2VcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInYtZXhhbXBsZS1vcFwiPlxuICAgICAgPHYtb25lLXBpZWNlIDpzY2FsZT1cIjEuOFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdi1sYW5kc2NhcGU+XG4gIDwhLS0gRU5EIFZMYW5kc2NhcGUgLS0+XG4gIDwhLS0gU1RBUlQgVkFjdGlvbkJhciAtLT5cbiAgPHYtYWN0aW9uLWJhciA6YWN0aW9ucz1cInN0YXRlLmFjdGlvbkRhdGFcIj48L3YtYWN0aW9uLWJhcj5cbiAgPCEtLSBFTkQgVkFjdGlvbkJhciAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVhY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQge1xuICBWQWN0aW9uQmFyLFxuICBWQW1vdW50LFxuICBWVGFnLFxuICBWTGFuZHNjYXBlLFxuICBWT25lUGllY2UsXG4gIFZQb3B1cCxcbiAgVlBvcHVwVGl0bGVCYXIsXG4gIFZQcm9ncmVzcyxcbiAgVkN1YmVBbmltXG59IGZyb20gJ3Z1aS12Yy1uZXh0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdIZWxsb1dvcmxkVlVJJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgVkFjdGlvbkJhcixcbiAgICBWQW1vdW50LFxuICAgIFZUYWcsXG4gICAgVkxhbmRzY2FwZSxcbiAgICBWT25lUGllY2UsXG4gICAgVlBvcHVwLFxuICAgIFZQb3B1cFRpdGxlQmFyLFxuICAgIFtWUHJvZ3Jlc3MubmFtZV06IFZQcm9ncmVzcyxcbiAgICBWQ3ViZUFuaW1cbiAgfSxcblxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHtcbiAgICAgIGlzU2hvd1BvcHVwVGl0bGVCYXI6IGZhbHNlLFxuICAgICAgaXNTaG93UG9wdXA6IGZhbHNlLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBhbmltRHVyYXRpb246IDEwMDAsXG4gICAgICBzdHJva2VDb2xvcjogY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmNvdW50IDwgMTAgPyAnIzM2QycgOiAnI0ZDOTE1MycpKSxcbiAgICAgIGFjdGlvbkRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZXNldCcsXG4gICAgICAgICAgdHlwZTogY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmNvdW50ID4gMCA/ICdkZWZhdWx0JyA6ICdkaXNhYmxlZCcpKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiAoc3RhdGUuY291bnQgPSAwKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogY29tcHV0ZWQoKCkgPT4gYENvdW50IGlzOiAke3N0YXRlLmNvdW50fWApLFxuICAgICAgICAgIHR5cGU6IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5jb3VudCA8IDEwID8gJ3ByaW1hcnknIDogJ2Rpc2FibGVkJykpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmNvdW50KytcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID09PSAxMCAmJiBzZXRUaW1lb3V0KCgpID0+IChzdGF0ZS5pc1Nob3dQb3B1cFRpdGxlQmFyID0gdHJ1ZSksIHN0YXRlLmFuaW1EdXJhdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuXG4gICAgY29uc3Qgc2hvd1BvcHVwID0gKHZhbCkgPT4ge1xuICAgICAgc3RhdGUuaXNTaG93UG9wdXAgPSB2YWxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGUsXG4gICAgICBzaG93UG9wdXBcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0IFwiaHR0cHM6Ly91bnBrZy5jb20vdnVpLXZjLW5leHRAMC4xMy4xOC9kaXN0L3N0eWxlLmNzc1wiO1xuICBcbiNhcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQ6I0ZGQTUwMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbiAgXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuLnYtcHJvZ3Jlc3Mge1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLnYtcHJvZ3Jlc3Mgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnYtcHJvZ3Jlc3Mgc3Bhbi51bml0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udi1leGFtcGxlLW9wIHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xufVxuXG4udi1leGFtcGxlLXBvcHVwLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi52LWV4YW1wbGUtcG9wdXAtYm90dG9tIGltZyB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi52LWV4YW1wbGUtcG9wdXAtYm90dG9tIC52LWV4YW1wbGUtb3AtY3ViZSB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuICBcbi52LXRhZyAuc2l6ZS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnYtbGFuZHNjYXBlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi52LWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnYtcG9wdXAtdGl0bGUtYmFyLmxhcmdlIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuICBcbi52LXBvcHVwLXRpdGxlLWJhciAudGl0bGUtYmFyLWxlZnQsIC52LXBvcHVwLXRpdGxlLWJhciAudGl0bGUtYmFyLXJpZ2h0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuXG4udi1wb3B1cC10aXRsZS1iYXIgLnRpdGxlLWJhci10aXRsZSBwLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuICBcbi52LXBvcHVwLXRpdGxlLWJhciAudGl0bGUtYmFyLXRpdGxlIHAuZGVzY3JpYmUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVpLXZjLW5leHRcIjogXCJodHRwczovL3VucGtnLmNvbS92dWktdmMtbmV4dEAwLjEzLjE4L2Rpc3QvdnVpLXZjLW5leHQuZXMuanNcIlxuICB9XG59In0=).

> VUI contains Mobile web UI components based on Vue 3.

## Project setup

### How to setup your project

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

About vite, please check Configuration Reference - [vite](https://vitejs.dev/config/).

## License

<img src="https://nikoni.top/images/niko-mit.png" alt="MIT License" width="396" height="250"/>
