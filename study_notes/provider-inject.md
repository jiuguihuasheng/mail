# 方便多层级组件通信 父--->孙....
# 使用方法：
* 在上层组件定义provide
* 在下层组件使用inject注入
* 例如：
    父级组件提供 'foo'
    var Provider = {
      provide: {
        foo: 'bar'
      }
    }

    子组件注入 'foo'
    var Child = {
      inject: ['foo'],
      created () {
        console.log(this.foo) // => "bar"
      }
    }

# 原理：
* provide 把定义的provide拿出来，如果定义的是属性则直接拿出来，如果是函数则执行函数拿到返回值(provide会定义到当前实例上)
* inject 循环injects数组，然后一层层往上级找有没有这个属性，直到找到，将结果定义到当前自身组件实例上