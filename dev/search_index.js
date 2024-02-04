var documenterSearchIndex = {"docs":
[{"location":"description/#Set-Description","page":"Set Description","title":"Set Description","text":"","category":"section"},{"location":"description/","page":"Set Description","title":"Set Description","text":"This section introduces on generating detailed set descriptions. Combined with set events, these descriptions are essential for intuitively comprehending the reasons behind set membership outcomes in complex situations.","category":"page"},{"location":"description/","page":"Set Description","title":"Set Description","text":"I = @setbuild(Integer)\nA = @setbuild(x ∈ I, 0 < x < 4)\nB = @setbuild(x ∈ I, 1 < x < 5)\nC = A ∩ B\nprintln(describe(C))","category":"page"},{"location":"description/","page":"Set Description","title":"Set Description","text":"The \"println(describe(C))\" displays the details of set C's construction.:","category":"page"},{"location":"description/","page":"Set Description","title":"Set Description","text":"{ x ∈ A | 0 < x < 4 }, where\n    A = { x ∈ ::Integer }\n∩\n{ x ∈ A | 1 < x < 5 }, where\n    A = { x ∈ ::Integer }","category":"page"},{"location":"creation/#Set-Creation","page":"Set Creation","title":"Set Creation","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The @setbuild` macro in SetBuilders is the primary interface for creating sets.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"With this macro, users can create sets from Julia types, predicates, mappings, and lists of elements.","category":"page"},{"location":"creation/#Empty-Set-and-Universal-Set","page":"Set Creation","title":"Empty Set and Universal Set","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Let's start with the simplest ones: the empty set and the universal set.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"E = @setbuild()     # Empty set\nU = @setbuild(Any)  # Universal set","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"With no argument, @setbuild creates an empty set, which does not contain any elements.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"In Julia, the Any type is a special type that sits at the top of the type hierarchy. With the Any type, @setbuild creates the universal set, which includes all objects in Julia.","category":"page"},{"location":"creation/#Set-from-Julia-Types","page":"Set Creation","title":"Set from Julia Types","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"With Jula type, @setbuild creates a set that includes all instances of that type.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"struct MyStruct\n    a\n    b\nend\n\nI = @setbuild(Integer)\nR = @setbuild(Real)\nS = @setbuild(MyStruct)","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set I includes instances of all subtypes of Integer (BigInt, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, and Bool).","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Please note that the set I conceptually \"includes\" such elements, but does not actually \"contain\" them.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Similarly, the set R includes all instances of all subtypes of the Real type, encompassing all subtypes of Integer, AbstractFloat, AbstractIrrational, and Rational types.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Note also that @setbuild can create sets from user-defined types. The set S includes all instances of the MyStruct type.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"(Image: Sets from Julia types)","category":"page"},{"location":"creation/#Enumerated-Set","page":"Set Creation","title":"Enumerated Set","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Similar to Julia's Set data structure, @setbuild can create a set from a list of elements.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"value = 10\n\nA = @setbuild([1, 2, 3])\nB = @setbuild(Int64[value, 2])\nC = @setbuild(Dict{String, String}[])","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set A in the above example include the three elements.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Note that Setbuilders Enumerated Set actually \"contains\" the elements.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Users can specify the type of elements, as shown in the set B. There is one difference in handling the type of elements compared to Julia's Set. When an element is \"pushed\" into the set, SetBuilder enumerated sets do not promote the element's type, whereas Julia Set does.","category":"page"},{"location":"creation/#Cartesian-Product-Set","page":"Set Creation","title":"Cartesian Product Set","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"In some cases, we may want to create a set by selecting elements from each set and arranging the chosen elements in order, known as the Cartesian product.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"D = @setbuild((I, I))\nF = @setbuild((x, y) in I)\nG = @setbuild((I^3, z in I))","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set D includes all pairs of elements from the set I, previously defined in the example above as a set of Julia Integer type.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set F offers another syntax for creating a set of Integer pairs, similar to the set D.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set G demonstrates another syntax for creating a Cartesian product set with the 4-ary Cartesian product set.","category":"page"},{"location":"creation/#Predicate-Set","page":"Set Creation","title":"Predicate Set","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"Predicates are logical formulas that yield true for set members. In SetBuilders, predicates can be any expression yielding a Boolean result, including functions.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"H = @setbuild(x in I, 0 <= x < 10)\nJ = @setbuild(x in I, 5 <= x < 15)\nK = @setbuild((x in H, y in J), x < 5 && y > 10)\nL = @setbuild((x in H, y in J), c1*x + c2*y > 0, c1=-1, c2=1)\nM = @setbuild(x in I, x + y > 0, y=value)\nN = @setbuild(x in @setbuild(Real), x > 0)","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The sets H and J in the above example have two arguments. The first argument defines the domain of the sets. In other words, all members of the sets H and J should also be members of the set I. Additionally, all members of these sets should satisfy the Boolean expression of the second argument.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set K demonstrates how to define the domain of a set using multiple sets.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The sets L and M show how to use values defined outside of the @setbuild macro.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set N illustrates that the @setbuild macro can be nested within another @setbuild macro.","category":"page"},{"location":"creation/#Mapped-Set","page":"Set Creation","title":"Mapped Set","text":"","category":"section"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"With a Mapped Set, users can create a set using mappings from one set to another.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"O = @setbuild(x in H, z in I, z = x + 5, x = z - 5)","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"A \"Mapped Set\" should have at least four arguments.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The first argument defines the source set, or domain in mathematical term, of a mapping. The mapping starts from the elements of the set H.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The second argument defines the destination set , or codomain, of a mapping. The mapping arrives at the elements of the set I.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The third argument defines a \"forward\" mapping from the source set (H, domain) to the destination set (I, codomain). The mapping at the third argument defines the way how to generated an element(or elements) in the codomain.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The fourth argument defines a \"backward\" mapping from the destination set (I, codomain) to the source set (H, domain). The mapping at the fourth argument defines the way how to generated an element(or elements) in the domain.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"(Image: Mapping in the set O)","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"```julia function myfunc(x)     x - 5 end","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"P = @setbuild(x in J, z in I, z = x + 5, x = func(z), func=myfunc) Q = @setbuild((x in H, y in J), z in S, z = mystruct(x, y),                 (x, y) = (z.a, z.b), mystruct=MyStruct)","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set P demonstrates how to use a function defined outside of @setbuild to create a mapping.","category":"page"},{"location":"creation/","page":"Set Creation","title":"Set Creation","text":"The set Q shows that a mapped set can map to a user-defined type.","category":"page"},{"location":"event/#Membership-Event","page":"Membership Event","title":"Membership Event","text":"","category":"section"},{"location":"event/","page":"Membership Event","title":"Membership Event","text":"This section introduces event handlers that activate in response to the outcomes of membership tests and their applications in different scenarios. For example, using ","category":"page"},{"location":"event/","page":"Membership Event","title":"Membership Event","text":"julia> using SetBuilders\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> A = @setbuild(x ∈ I, 0 < x < 4)\nPredicateSet((x ∈ TypeSet(Integer)) where 0 < x < 4)\n\njulia> B = @setbuild(x ∈ I, 1 < x < 5)\nPredicateSet((x ∈ TypeSet(Integer)) where 1 < x < 5)\n\njulia> C = A ∩ B\nCompositeSet(PredicateSet((x ∈ TypeSet(Integer)) where 0 < x < 4) ∩ PredicateSet((x ∈ TypeSet(Integer)) where 1 < x < 5))\n\njulia> F = hist -> println(describe(hist[1].set, mark=hist[end].set))\n#1 (generic function with 1 method)\n\njulia> is_member(C, 1, on_notamember=F)\nfalse","category":"page"},{"location":"event/","page":"Membership Event","title":"Membership Event","text":"displays the details of set C's construction, pinpointing the specific set that failed the membership test.","category":"page"},{"location":"event/","page":"Membership Event","title":"Membership Event","text":"{ x ∈ A | 0 < x < 4 }, where\n    A = { x ∈ ::Integer }\n∩\n => { x ∈ A | 1 < x < 5 }, where\n    A = { x ∈ ::Integer }","category":"page"},{"location":"sharing/#Set-Sharing","page":"Set Sharing","title":"Set Sharing","text":"","category":"section"},{"location":"sharing/","page":"Set Sharing","title":"Set Sharing","text":"Introduces a Julia module extension for creating, saving, and sharing sets as files to facilitate collaboration among users.","category":"page"},{"location":"mapping/#Element-Mappings","page":"Element Mappings","title":"Element Mappings","text":"","category":"section"},{"location":"mapping/","page":"Element Mappings","title":"Element Mappings","text":"MappedSet contains a map that associates each element in the domain with zero or more elements in the codomain, known as a forward map. It also includes a backward map for reverse mapping. Elements can be generated using these maps.","category":"page"},{"location":"developer/#Developer-Documentaion","page":"Developer Documentation","title":"Developer Documentaion","text":"","category":"section"},{"location":"developer/#Extending-SetBuilders","page":"Developer Documentation","title":"Extending SetBuilders","text":"","category":"section"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [SetBuilders]\nPrivate = false","category":"page"},{"location":"reference/#SetBuilders.SetBuilders","page":"Reference","title":"SetBuilders.SetBuilders","text":"Main module for SetBuilders.jl – predicate-based set generation package for Julia.\n\n\n\n\n\n","category":"module"},{"location":"reference/#SetBuilders.SBSet","page":"Reference","title":"SetBuilders.SBSet","text":"SBSet - Type\n\nThe SBSet type is the supertype of all SetBuilders set types.\n\nExamples\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> I isa SBSet\ntrue\n\n\n\n\n\n","category":"type"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.CompositeSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::CompositeSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> A = @setbuild(x in I, 0 <= x < 10)\nPredicateSet((x ∈ TypeSet(Integer)) where 0 <= x < 10)\n\njulia> B = @setbuild(x in I, 5 <= x < 15)\nPredicateSet((x ∈ TypeSet(Integer)) where 5 <= x < 15)\n\njulia> C = A ∩ B\nCompositeSet(PredicateSet((x ∈ TypeSet(Integer)) where 0 <= x < 10) ∩ PredicateSet((x ∈ TypeSet(Integer)) where 5 <= x < 15))\n\njulia> is_member(C, 5) # 5 in C\ntrue\n\njulia> is_member(C, 0) # 0 in C\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.EmptySet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::EmptySet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> E = @setbuild()\nEmptySet()\n\njulia> is_member(E, 1)   # 1 in E\nfalse\n\njulia> is_member(E, 0.1) # 0.1 in E\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.EnumerableSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::EnumerableSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> A = @setbuild(Union{Int64, Float64}[1])\nEnumerableSet([{Float64}*0, {Int64}*1])\n\njulia> is_member(A, 1)\ntrue\n\njulia> is_member(A, Int32(1))\nfalse\n\njulia> push!(A, Float64(2.0))\nEnumerableSet([{Float64}*1, {Int64}*1])\n\njulia> is_member(A, Float64(2.0))\ntrue\n\njulia> pop!(A, Float64(2.0))\n2.0\n\njulia> is_member(A, Float64(2.0))\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.MappedSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::MappedSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> struct MyStruct\n       a\n       b\n       end\n\njulia> S = @setbuild(MyStruct)\nTypeSet(MyStruct)\n\njulia> A = @setbuild(s in S, (x in I, y in I) -> mystruct(x,y), s -> (s.a, s.b),\n                     mystruct=MyStruct)\nMappedSet((x ∈ TypeSet(Integer)), (y ∈ TypeSet(Integer)) -> (s ∈ TypeSet(MyStruct)))\n\njulia> is_member(A, MyStruct(1, 1))   # MyStruct(1, 1) in A\ntrue\n\njulia> is_member(A, MyStruct(1.0, 1)) # MyStruct(1.0, 1) in A\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.PredicateSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::PredicateSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> A = @setbuild(x in I, 0 <= x < 10)\nPredicateSet((x ∈ TypeSet(Integer)) where 0 <= x < 10)\n\njulia> is_member(A, 0)  # 0 in A \ntrue\n\njulia> is_member(A, 10) # 10 in A\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.TypeSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::TypeSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> I = @setbuild(Integer)\nTypeSet(Integer)\n\njulia> is_member(I, 1)   # 1 in I\ntrue\n\njulia> is_member(I, 0.1) # 0.1 in I\nfalse\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.is_member-Tuple{SetBuilders.UniversalSet, Any}","page":"Reference","title":"SetBuilders.is_member","text":"is_member(set::UniversalSet, elem; kwargs...)\n\nCheck if elem is a member of set\n\nExamples\n\njulia> U = @setbuild(Any)\nUniversalSet()\n\njulia> is_member(U, 1)   # 1 in U\ntrue\n\njulia> is_member(U, 0.1) # 0.1 in U\ntrue\n\n\n\n\n\n","category":"method"},{"location":"reference/#SetBuilders.@setbuild-Tuple","page":"Reference","title":"SetBuilders.@setbuild","text":"@setbuild([args...[; kwargs...]])\n\nThe @setbuild macro creates various SetBuilders sets.\n\nThe @setbuild macro in SetBuilders for creating sets from Julia data types, predicates, and mappings. For example, I = @setbuild(Integer) creates a set of all Julia Integer type objects, and A = @setbuild(x ∈ I, 0 < x < 4) creates a set that implies to contain the integers 1, 2, and 3.\n\nExamples\n\njulia> E = @setbuild()\nEmptySet()\n\njulia> U = @setbuild(Any)\nUniversalSet()\n\njulia> I = @setbuild(Integer) # Julia Integer-type set\nTypeSet(Integer)\n\njulia> D = @setbuild(Dict{String, Number}) # Julia Dict{String, Number}-type set\nTypeSet(Dict{String, Number})\n\njulia> struct MyStruct\n           a\n           b\n       end\n\njulia> S = @setbuild(MyStruct)  # Julia user-type set\nTypeSet(MyStruct)\n\njulia> N = @setbuild([1, 2, 3]) # Enumerable set\nEnumerableSet([{Int64}*3])\n\njulia> C = @setbuild((I, I))  # Cartesian sets\nPredicateSet((c1 ∈ TypeSet(Integer)), (c2 ∈ TypeSet(Integer)) where true)\n\njulia> P = @setbuild(x in I, 0 <= x < 10) # Predicate sets\nPredicateSet((x ∈ TypeSet(Integer)) where 0 <= x < 10)\n\njulia> M = @setbuild(z in I, (x in P) -> x + 5, z -> z - 5) # Mapped sets\nMappedSet((x ∈ PredicateSet((x ∈ TypeSet(Integer)) where 0 <= x < 10)) -> (z ∈ TypeSet(Integer)))\n\n\n\n\n\n","category":"macro"},{"location":"reference/#SetBuilders.@setpkg-Tuple","page":"Reference","title":"SetBuilders.@setpkg","text":"@setpkg command[ command-arguments... ]\n\nThe @setpkg macro enables the reuse of sets that were developed separately.\n\ncommands\n\nload: loads sets from a local file, also known as a setfile\n\n@setpkg load <path/to/file>\n\nThe setfile is a regular Julia module customized for SetBuilders.\n\nExamples\n\nAssuming that the file myset.sjl contains the following Julia code:\n\nmodule MySetModule\n\nexport MYSET\n\nI = @setbuild(Integer)\nMYSET = @setbuild(x in I, x > 0)\n\nend\n\nMYSET can be used as shown in the example below:\n\njulia> @setpkg load \"myset.sjl\"\n\njulia> using SetBuilders.MySetModule\n\njulia> 1 in MYSET\ntrue\n\njulia> 0 in MYSET\nfalse\n\n\n\n\n\n","category":"macro"},{"location":"membership/#Set-Membership","page":"Set Membership","title":"Set Membership","text":"","category":"section"},{"location":"membership/","page":"Set Membership","title":"Set Membership","text":"This section explains set membership checks using \"in\" or \"∈\" operators by showing various examples.","category":"page"},{"location":"membership/","page":"Set Membership","title":"Set Membership","text":"All of the following @assert checks should pass.","category":"page"},{"location":"membership/","page":"Set Membership","title":"Set Membership","text":"# test fixtures\nvalue = 10\n\nstruct MyStruct\n    a\n    b\nend\n\nfunction myfunc(x)\n    x - 5\nend\n\n# Empty set\nE = @setbuild()\n@assert !(1 in E)\n\n# Universal set\nU = @setbuild(Any)\n@assert 1 in U\n\n# sets from Julia types\nI = @setbuild(Integer)\n@assert 1 in I\n@assert !(1.0 in I)\n\nR = @setbuild(Real)\n@assert 1.0 in R\n@assert !(1.0im in R)\n\nS = @setbuild(MyStruct)\n@assert MyStruct(1,2) in S\n@assert !(1 in S)\n\n# Enumeratable sets\nA = @setbuild([1, 2, 3])\n@assert 1 in A\n@assert !(4 in A)\n\nB = @setbuild(Int64[value, 2])\n@assert value in B\n@assert !(Int32(value) in B)\n@assert !(3 in B)\npush!(B, 3)\n@assert 3 in B\npop!(B, 3)\n@assert !(3 in B)\n\nC = @setbuild(Dict{String, String}[])\nd1 = Dict{String, String}(\"a\" => \"x\")\nd2 = Dict{String, Integer}(\"a\" => 1)\n@assert !(d1 in C)\npush!(C, d1)\n@assert d1 in C\n@assert !(d2 in C)\n\n# Cartesian sets\nD = @setbuild((I, I))\n@assert (1, 1) in D\n@assert !(1 in D)\n@assert !((1.0, 1.0) in D)\n\nF = @setbuild((x, y) in I)\n@assert (1, 1) in F\n@assert !(1 in F)\n@assert !((1.0, 1.0) in F)\n\nG = @setbuild((I^3, z in I))\n@assert (1, 1, 1, 1) in G\n@assert !(1 in G)\n@assert !((1.0, 1.0, 1.0, 1.0) in G)\n\n# Predicate sets\nH = @setbuild(x in I, 0 <= x < 10)\n@assert 0 in H\n@assert !(10 in H)\n\nJ = @setbuild(x in I, 5 <= x < 15)\n@assert 5 in J\n@assert !(15 in J)\n\nK = @setbuild((x in H, y in J), x < 5 && y > 10)\n@assert (4, 11) in K\n@assert !((9, 10) in K)\n\nL = @setbuild((x in H, y in J), c1*x + c2*y > 0, c1=-1, c2=1)\n@assert (5, 10) in L\n@assert !((9, 5) in L)\n\nM = @setbuild(x in I, x + y > 0, y=value)\n@assert -9 in M\n@assert !(-10 in M)\n\nN = @setbuild(x in @setbuild(Real), x > 0)\n@assert 1 in N\n@assert 1.0 in N\n@assert !(1im in N)\n\n# Mapped sets\nO = @setbuild(z in I, (x in H) -> x + 5, z -> z - 5)\n@assert 5 in O\n@assert !(0 in O)\n\nP = @setbuild(z in I, (x in J) -> x + 5, z -> func(z), func=myfunc)\n@assert 10 in P\n@assert !(5 in P)\n\nQ = @setbuild(z in S, (x in H, y in J) -> mystruct(x, y),\n                z -> (z.a, z.b), mystruct=MyStruct)\n@assert MyStruct(5, 5) in Q\n@assert !(MyStruct(10, 10) in Q)\n","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"CurrentModule = SetBuilders","category":"page"},{"location":"#SetBuilders","page":"SetBuilders Documentation","title":"SetBuilders","text":"","category":"section"},{"location":"#In-a-nutshell...","page":"SetBuilders Documentation","title":"In a nutshell...","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"SetBuilders provides Julia users with the power of predicate-based sets.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"Many programming languages, including Julia, support a type of enumerable sets but not predicate sets in the mathematical sense. For instance, in Julia, it's possible to create a set containing integer values, such as","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"A = Set([1,2,3])","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"However, creating the following is not possible:","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"A = Set(x ∈ Integer | 0 < x < 4)","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"With the SetBuilders package, Julia users can create predicate sets, compose them using set operations such as unions and intersections, and check if an object is a member of the set.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"I = @setbuild(Integer)           # creates a set from Julia Integer type\nA = @setbuild(x ∈  I, 0 < x < 4) # creates a set with the predicate of \"0 < x < 4\"\nB = @setbuild(x in I, 2 < x < 6) # creates a set with the predicate of \"2 < x < 6\"\nC = A ∩ B                        # creates an intersection with the two sets\n                                 # As an alternative, \"C = intersection(A, B)\" can be used\n@assert 3 ∈ C                    # => true, 3 is a member of the set C\n                                 # As an alternative, \"3 in C\" can be used\n@assert !(4 in C)                # => true, 4 is not a member of the set C","category":"page"},{"location":"#Installation","page":"SetBuilders Documentation","title":"Installation","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"The package can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"pkg> add SetBuilders","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"Alternatively, it can be installed via the Pkg API:","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"julia> import Pkg; Pkg.add(\"SetBuilders\")","category":"page"},{"location":"#Sets-in-Mathematics","page":"SetBuilders Documentation","title":"Sets in Mathematics","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"Set theory, established by Georg Cantor in the late 19th century, is often regarded as the language of mathematics. It introduces the concept of a set as a collection of distinct objects and provides basic operations such as union, intersection, and difference. The evolution of set theory, marked by milestones like Cantor's work, Russell's Paradox, and the development of the Zermelo-Fraenkel Set Theory (ZF), has shaped it into a robust, axiomatic framework. This transformation solidified set theory's role as the universal language for expressing and structuring mathematical ideas, making it fundamental to the development and understanding of various mathematical disciplines.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"In modern mathematics, set theory's influence is all-encompassing. It is the framework within which most mathematical concepts and theories are formulated and discussed. From the abstract structures in algebra to the nuanced concepts in topology and analysis, set theory provides the essential vocabulary and syntax. It underpins the formation of groups, rings, and fields in algebra, the characterization of space in topology, and the rigorous foundation of calculus in analysis. This universality showcases set theory as not just a branch of mathematics but as the foundational dialect through which mathematics expresses itself.","category":"page"},{"location":"#Sets-in-Programming","page":"SetBuilders Documentation","title":"Sets in Programming","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"In programming languages like Julia and C++, the set data structure serves a specific yet crucial function, primarily focused on managing collections of unique elements. For instance, in Julia, converting an array to a set to eliminate duplicates is straightforward: my_set = Set(my_array). In C++, the Standard Template Library (STL) provides a set container that automatically removes duplicates and maintains element order, instantiated with std::set<int> my_set(my_array, my_array + array_size);.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"However, the application of sets in programming languages is more limited compared to their comprehensive role in mathematics. In mathematics, set theory is a fundamental discipline with wide-ranging implications. In contrast, programming primarily utilizes sets for pragmatic tasks like data manipulation and storage. While indispensable within their scope, these uses do not capture the broad and abstract nature of mathematical set theory. Consequently, sets in programming, despite their utility, represent a more confined aspect of the extensive and foundational role they play in mathematics.","category":"page"},{"location":"#[SetBuilders](https://github.com/grnydawn/SetBuilders.jl):-Harnessing-the-Power-of-Predicate-Based-Sets","page":"SetBuilders Documentation","title":"SetBuilders: Harnessing the Power of Predicate-Based Sets","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"Set, vital in math, finds new life in programming with Julia's SetBuilders. This tool innovatively allows sets to be defined not just by listing elements but also through predicates - logical formulas yielding true for set members. Predicates in Julia can be any expression yielding a Boolean result, thus enabling sophisticated set definitions through set operations. Additionally, SetBuilders offers features such as set event and customizable set descriptions, greatly enhancing its utility.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"The following example demonstrates how to identify the set that fails the membership test among the sets in the set composition using set event and set description features.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"# continues from the code example at the beginning of this page\n\nF = hist -> println(describe(hist[1].set, mark=hist[end].set))\nis_member(C, 1, on_notamember=F)","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"The value 1 is not a member of set C because the predicate of set B excludes it. The output from the previous code indicates that the \"=>\" mark correctly identifies set B as the reason for exclusion.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"{ x ∈ A | 0 < x < 4 }, where\n    A = { x ∈ ::Integer }\n∩\n => { x ∈ A | 1 < x < 5 }, where\n    A = { x ∈ ::Integer }","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"The function is_member serves a similar purpose to the membership operator, in or ∈, but with additional keyword arguments. In the example, on_notamember accepts a function with one input argument, hist, and prints the output from the describe function, which details the structure of the first argument set. Optionally, the describe function accepts a mark keyword to indicate a specific set in the output. In this case, hist[end].set is the set that fails the membership test.","category":"page"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"For further details, please continue reading the following manual.\"","category":"page"},{"location":"#Contents","page":"SetBuilders Documentation","title":"Contents","text":"","category":"section"},{"location":"","page":"SetBuilders Documentation","title":"SetBuilders Documentation","text":"Set Creation: explains how to use @setbuild macro for building various types of sets.\nSet Membership: shows examples of using in and ∈ set membership operators.\nSet Operations: shows examples of using set operations.\nSet Description: explains how to generate set descriptions.\nMembership Event: explains how to use membership event handlers.\nElement Mappings: explains how to generate set elements from Mapped sets.\nSet Sharing: explains how to create/use/share a Julia module for sets\nReference: provides reference manual for using SetBuilders.\nDeveloper Documentaion: explains how to extend SetBuilders.","category":"page"},{"location":"operations/#Set-Operations","page":"Set Operations","title":"Set Operations","text":"","category":"section"},{"location":"operations/","page":"Set Operations","title":"Set Operations","text":"SetBuilders sets support conventional set operations including union, intersection, difference, symmetric difference, and complement.","category":"page"},{"location":"operations/","page":"Set Operations","title":"Set Operations","text":"The first argument of the all function in the examples is an anonymous function that is applied to all items in the last argument.","category":"page"},{"location":"operations/","page":"Set Operations","title":"Set Operations","text":"All of the following @assert checks should pass.","category":"page"},{"location":"operations/","page":"Set Operations","title":"Set Operations","text":"E = @setbuild()\nU = @setbuild(Any)\n\n@assert all(x -> !(x in E), (0, 1))\n@assert all(x -> x in U, (0, 1))\n\n@assert complement(E) == U\n@assert complement(U) == E\n@assert ~U == E\n@assert ~E == U\n\nI = @setbuild(Integer)\nA = @setbuild(x in I, 0 <= x < 10)\nB = @setbuild(x in I, 5 <= x < 15)\nX = @setbuild(Union{Int64, Int32}[Int32(-1), Int32(1), 2])\n\n@assert all(x -> x in A, 0:9)\n@assert all(x -> x ∈ A, 0:9)\n@assert all(x -> !(x in A), (-1, 10))\n\n@assert all(x -> x in union(A, B), 0:14)\n@assert all(x -> x in A ∪ B, 0:14)\n@assert all(x -> !(x in union(A, B)), (-1, 15))\n@assert all(x -> x in union(A, U), -1:15)\n@assert all(x -> x in A ∪ ~E, -1:15)\n@assert all(x -> x in union(A, E), 0:9)\n\n@assert all(x -> x in intersect(A, B), 5:9)\n@assert all(x -> x ∈ A ∩ B, 5:9)\n@assert all(x -> !(x in intersect(A, B)), 0:4)\n@assert all(x -> x in intersect(A, U), 0:9)\n@assert all(x -> !(x in intersect(A, E)), -1:15)\n\n@assert all(x -> x in setdiff(A, B), 0:4)\n@assert all(x -> x in A - B, 0:4)\n@assert all(x -> !(x in setdiff(A, B)), 5:9)\n@assert all(x -> !(x in setdiff(A, U)), -1:15)\n@assert all(x -> x in setdiff(U, A), 10:14)\n@assert all(x -> x in ~E - A, 10:14)\n@assert all(x -> x in setdiff(A, E), 0:9)\n@assert all(x -> !(x in setdiff(E, A)), -1:15)\n\n@assert all(x -> x in symdiff(A, B), [0:4; 10:14])\n@assert all(x -> !(x in symdiff(A, B)), 5:9)\n@assert all(x -> !(x in symdiff(A, U)), 0:9)\n@assert all(x -> x in symdiff(A, E), 0:9)\n\n@assert all(x -> x in A ∪ X, [Int32(i) for i in -1:9])\n@assert all(x -> !(x in A ∩ X), [0, 1])","category":"page"}]
}
