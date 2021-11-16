
type Test = {test:1}

type Val<T> = T;
type Fun<T> = (x:T)=>void


type Wrapper<T extends Test | undefined> = {
    val: Val<T>,
    fun: Fun<T>
}

const asWrapper = <T extends Test | undefined>(some:Wrapper<T>): Wrapper<T>=>some

const wrap1 = asWrapper(
    {
        val: {test:1},
        fun: (x:{test:1})=>{}
    }
)

const wrap2 = asWrapper(
    {
        val: undefined,
        fun:()=>{}
    }
)

const wrap3 = asWrapper(
    {
        val: undefined,
        fun: (x:{test:1})=>{}
    }
)

const wrap4 = asWrapper(
    {
        val: {test:1},
        fun:undefined
    }
)
