
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Classe
 * 
 */
export type Classe = $Result.DefaultSelection<Prisma.$ClassePayload>
/**
 * Model Specialisation
 * 
 */
export type Specialisation = $Result.DefaultSelection<Prisma.$SpecialisationPayload>
/**
 * Model Raid
 * 
 */
export type Raid = $Result.DefaultSelection<Prisma.$RaidPayload>
/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>
/**
 * Model RaidPoints
 * 
 */
export type RaidPoints = $Result.DefaultSelection<Prisma.$RaidPointsPayload>
/**
 * Model WishlistItem
 * 
 */
export type WishlistItem = $Result.DefaultSelection<Prisma.$WishlistItemPayload>
/**
 * Model LootHistory
 * 
 */
export type LootHistory = $Result.DefaultSelection<Prisma.$LootHistoryPayload>
/**
 * Model RaidAttendance
 * 
 */
export type RaidAttendance = $Result.DefaultSelection<Prisma.$RaidAttendancePayload>
/**
 * Model Boss
 * 
 */
export type Boss = $Result.DefaultSelection<Prisma.$BossPayload>
/**
 * Model Loot
 * 
 */
export type Loot = $Result.DefaultSelection<Prisma.$LootPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classe`: Exposes CRUD operations for the **Classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.ClasseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialisation`: Exposes CRUD operations for the **Specialisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialisations
    * const specialisations = await prisma.specialisation.findMany()
    * ```
    */
  get specialisation(): Prisma.SpecialisationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raid`: Exposes CRUD operations for the **Raid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raids
    * const raids = await prisma.raid.findMany()
    * ```
    */
  get raid(): Prisma.RaidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raidPoints`: Exposes CRUD operations for the **RaidPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaidPoints
    * const raidPoints = await prisma.raidPoints.findMany()
    * ```
    */
  get raidPoints(): Prisma.RaidPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlistItem`: Exposes CRUD operations for the **WishlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WishlistItems
    * const wishlistItems = await prisma.wishlistItem.findMany()
    * ```
    */
  get wishlistItem(): Prisma.WishlistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lootHistory`: Exposes CRUD operations for the **LootHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LootHistories
    * const lootHistories = await prisma.lootHistory.findMany()
    * ```
    */
  get lootHistory(): Prisma.LootHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raidAttendance`: Exposes CRUD operations for the **RaidAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaidAttendances
    * const raidAttendances = await prisma.raidAttendance.findMany()
    * ```
    */
  get raidAttendance(): Prisma.RaidAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boss`: Exposes CRUD operations for the **Boss** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bosses
    * const bosses = await prisma.boss.findMany()
    * ```
    */
  get boss(): Prisma.BossDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loot`: Exposes CRUD operations for the **Loot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loots
    * const loots = await prisma.loot.findMany()
    * ```
    */
  get loot(): Prisma.LootDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Classe: 'Classe',
    Specialisation: 'Specialisation',
    Raid: 'Raid',
    JoinRequest: 'JoinRequest',
    RaidPoints: 'RaidPoints',
    WishlistItem: 'WishlistItem',
    LootHistory: 'LootHistory',
    RaidAttendance: 'RaidAttendance',
    Boss: 'Boss',
    Loot: 'Loot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classe" | "specialisation" | "raid" | "joinRequest" | "raidPoints" | "wishlistItem" | "lootHistory" | "raidAttendance" | "boss" | "loot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Classe: {
        payload: Prisma.$ClassePayload<ExtArgs>
        fields: Prisma.ClasseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findFirst: {
            args: Prisma.ClasseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findMany: {
            args: Prisma.ClasseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          create: {
            args: Prisma.ClasseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          createMany: {
            args: Prisma.ClasseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClasseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          delete: {
            args: Prisma.ClasseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          update: {
            args: Prisma.ClasseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          deleteMany: {
            args: Prisma.ClasseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClasseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          upsert: {
            args: Prisma.ClasseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.ClasseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasseCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
          }
        }
      }
      Specialisation: {
        payload: Prisma.$SpecialisationPayload<ExtArgs>
        fields: Prisma.SpecialisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          findFirst: {
            args: Prisma.SpecialisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          findMany: {
            args: Prisma.SpecialisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>[]
          }
          create: {
            args: Prisma.SpecialisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          createMany: {
            args: Prisma.SpecialisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>[]
          }
          delete: {
            args: Prisma.SpecialisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          update: {
            args: Prisma.SpecialisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          deleteMany: {
            args: Prisma.SpecialisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialisationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>[]
          }
          upsert: {
            args: Prisma.SpecialisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialisationPayload>
          }
          aggregate: {
            args: Prisma.SpecialisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialisation>
          }
          groupBy: {
            args: Prisma.SpecialisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialisationCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialisationCountAggregateOutputType> | number
          }
        }
      }
      Raid: {
        payload: Prisma.$RaidPayload<ExtArgs>
        fields: Prisma.RaidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          findFirst: {
            args: Prisma.RaidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          findMany: {
            args: Prisma.RaidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>[]
          }
          create: {
            args: Prisma.RaidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          createMany: {
            args: Prisma.RaidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>[]
          }
          delete: {
            args: Prisma.RaidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          update: {
            args: Prisma.RaidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          deleteMany: {
            args: Prisma.RaidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>[]
          }
          upsert: {
            args: Prisma.RaidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPayload>
          }
          aggregate: {
            args: Prisma.RaidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaid>
          }
          groupBy: {
            args: Prisma.RaidGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidCountArgs<ExtArgs>
            result: $Utils.Optional<RaidCountAggregateOutputType> | number
          }
        }
      }
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
          }
        }
      }
      RaidPoints: {
        payload: Prisma.$RaidPointsPayload<ExtArgs>
        fields: Prisma.RaidPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          findFirst: {
            args: Prisma.RaidPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          findMany: {
            args: Prisma.RaidPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>[]
          }
          create: {
            args: Prisma.RaidPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          createMany: {
            args: Prisma.RaidPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>[]
          }
          delete: {
            args: Prisma.RaidPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          update: {
            args: Prisma.RaidPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          deleteMany: {
            args: Prisma.RaidPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaidPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>[]
          }
          upsert: {
            args: Prisma.RaidPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidPointsPayload>
          }
          aggregate: {
            args: Prisma.RaidPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaidPoints>
          }
          groupBy: {
            args: Prisma.RaidPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidPointsCountArgs<ExtArgs>
            result: $Utils.Optional<RaidPointsCountAggregateOutputType> | number
          }
        }
      }
      WishlistItem: {
        payload: Prisma.$WishlistItemPayload<ExtArgs>
        fields: Prisma.WishlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findFirst: {
            args: Prisma.WishlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findMany: {
            args: Prisma.WishlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          create: {
            args: Prisma.WishlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          createMany: {
            args: Prisma.WishlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          delete: {
            args: Prisma.WishlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          update: {
            args: Prisma.WishlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WishlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WishlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          aggregate: {
            args: Prisma.WishlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlistItem>
          }
          groupBy: {
            args: Prisma.WishlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemCountAggregateOutputType> | number
          }
        }
      }
      LootHistory: {
        payload: Prisma.$LootHistoryPayload<ExtArgs>
        fields: Prisma.LootHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LootHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LootHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          findFirst: {
            args: Prisma.LootHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LootHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          findMany: {
            args: Prisma.LootHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>[]
          }
          create: {
            args: Prisma.LootHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          createMany: {
            args: Prisma.LootHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LootHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>[]
          }
          delete: {
            args: Prisma.LootHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          update: {
            args: Prisma.LootHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LootHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LootHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LootHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LootHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootHistoryPayload>
          }
          aggregate: {
            args: Prisma.LootHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLootHistory>
          }
          groupBy: {
            args: Prisma.LootHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LootHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LootHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LootHistoryCountAggregateOutputType> | number
          }
        }
      }
      RaidAttendance: {
        payload: Prisma.$RaidAttendancePayload<ExtArgs>
        fields: Prisma.RaidAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          findFirst: {
            args: Prisma.RaidAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          findMany: {
            args: Prisma.RaidAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>[]
          }
          create: {
            args: Prisma.RaidAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          createMany: {
            args: Prisma.RaidAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>[]
          }
          delete: {
            args: Prisma.RaidAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          update: {
            args: Prisma.RaidAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          deleteMany: {
            args: Prisma.RaidAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaidAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>[]
          }
          upsert: {
            args: Prisma.RaidAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidAttendancePayload>
          }
          aggregate: {
            args: Prisma.RaidAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaidAttendance>
          }
          groupBy: {
            args: Prisma.RaidAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<RaidAttendanceCountAggregateOutputType> | number
          }
        }
      }
      Boss: {
        payload: Prisma.$BossPayload<ExtArgs>
        fields: Prisma.BossFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BossFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BossFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          findFirst: {
            args: Prisma.BossFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BossFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          findMany: {
            args: Prisma.BossFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          create: {
            args: Prisma.BossCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          createMany: {
            args: Prisma.BossCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BossCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          delete: {
            args: Prisma.BossDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          update: {
            args: Prisma.BossUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          deleteMany: {
            args: Prisma.BossDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BossUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BossUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          upsert: {
            args: Prisma.BossUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          aggregate: {
            args: Prisma.BossAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoss>
          }
          groupBy: {
            args: Prisma.BossGroupByArgs<ExtArgs>
            result: $Utils.Optional<BossGroupByOutputType>[]
          }
          count: {
            args: Prisma.BossCountArgs<ExtArgs>
            result: $Utils.Optional<BossCountAggregateOutputType> | number
          }
        }
      }
      Loot: {
        payload: Prisma.$LootPayload<ExtArgs>
        fields: Prisma.LootFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LootFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LootFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          findFirst: {
            args: Prisma.LootFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LootFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          findMany: {
            args: Prisma.LootFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>[]
          }
          create: {
            args: Prisma.LootCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          createMany: {
            args: Prisma.LootCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LootCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>[]
          }
          delete: {
            args: Prisma.LootDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          update: {
            args: Prisma.LootUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          deleteMany: {
            args: Prisma.LootDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LootUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LootUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>[]
          }
          upsert: {
            args: Prisma.LootUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LootPayload>
          }
          aggregate: {
            args: Prisma.LootAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoot>
          }
          groupBy: {
            args: Prisma.LootGroupByArgs<ExtArgs>
            result: $Utils.Optional<LootGroupByOutputType>[]
          }
          count: {
            args: Prisma.LootCountArgs<ExtArgs>
            result: $Utils.Optional<LootCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classe?: ClasseOmit
    specialisation?: SpecialisationOmit
    raid?: RaidOmit
    joinRequest?: JoinRequestOmit
    raidPoints?: RaidPointsOmit
    wishlistItem?: WishlistItemOmit
    lootHistory?: LootHistoryOmit
    raidAttendance?: RaidAttendanceOmit
    boss?: BossOmit
    loot?: LootOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdRaids: number
    joinRequests: number
    loots: number
    WishlistItem: number
    LootHistory: number
    attendances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRaids?: boolean | UserCountOutputTypeCountCreatedRaidsArgs
    joinRequests?: boolean | UserCountOutputTypeCountJoinRequestsArgs
    loots?: boolean | UserCountOutputTypeCountLootsArgs
    WishlistItem?: boolean | UserCountOutputTypeCountWishlistItemArgs
    LootHistory?: boolean | UserCountOutputTypeCountLootHistoryArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRaidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidAttendanceWhereInput
  }


  /**
   * Count Type ClasseCountOutputType
   */

  export type ClasseCountOutputType = {
    specialisation: number
    users: number
  }

  export type ClasseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialisation?: boolean | ClasseCountOutputTypeCountSpecialisationArgs
    users?: boolean | ClasseCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasseCountOutputType
     */
    select?: ClasseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountSpecialisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialisationWhereInput
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SpecialisationCountOutputType
   */

  export type SpecialisationCountOutputType = {
    users: number
  }

  export type SpecialisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SpecialisationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SpecialisationCountOutputType without action
   */
  export type SpecialisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialisationCountOutputType
     */
    select?: SpecialisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialisationCountOutputType without action
   */
  export type SpecialisationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RaidCountOutputType
   */

  export type RaidCountOutputType = {
    RaidPoints: number
    LootHistory: number
    attendances: number
    users: number
    joinRequests: number
  }

  export type RaidCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RaidPoints?: boolean | RaidCountOutputTypeCountRaidPointsArgs
    LootHistory?: boolean | RaidCountOutputTypeCountLootHistoryArgs
    attendances?: boolean | RaidCountOutputTypeCountAttendancesArgs
    users?: boolean | RaidCountOutputTypeCountUsersArgs
    joinRequests?: boolean | RaidCountOutputTypeCountJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidCountOutputType
     */
    select?: RaidCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeCountRaidPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidPointsWhereInput
  }

  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeCountLootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootHistoryWhereInput
  }

  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidAttendanceWhereInput
  }

  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RaidCountOutputType without action
   */
  export type RaidCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }


  /**
   * Count Type BossCountOutputType
   */

  export type BossCountOutputType = {
    loots: number
  }

  export type BossCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loots?: boolean | BossCountOutputTypeCountLootsArgs
  }

  // Custom InputTypes
  /**
   * BossCountOutputType without action
   */
  export type BossCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossCountOutputType
     */
    select?: BossCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BossCountOutputType without action
   */
  export type BossCountOutputTypeCountLootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootWhereInput
  }


  /**
   * Count Type LootCountOutputType
   */

  export type LootCountOutputType = {
    users: number
    WishlistItem: number
    LootHistory: number
  }

  export type LootCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LootCountOutputTypeCountUsersArgs
    WishlistItem?: boolean | LootCountOutputTypeCountWishlistItemArgs
    LootHistory?: boolean | LootCountOutputTypeCountLootHistoryArgs
  }

  // Custom InputTypes
  /**
   * LootCountOutputType without action
   */
  export type LootCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootCountOutputType
     */
    select?: LootCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LootCountOutputType without action
   */
  export type LootCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * LootCountOutputType without action
   */
  export type LootCountOutputTypeCountWishlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
  }

  /**
   * LootCountOutputType without action
   */
  export type LootCountOutputTypeCountLootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    classeId: number | null
    specialisationId: number | null
    raidId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    classeId: number | null
    specialisationId: number | null
    raidId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    classeId: number | null
    specialisationId: number | null
    raidId: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    classeId: number | null
    specialisationId: number | null
    raidId: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    classeId: number
    specialisationId: number
    raidId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    classeId?: true
    specialisationId?: true
    raidId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    classeId?: true
    specialisationId?: true
    raidId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    classeId?: true
    specialisationId?: true
    raidId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    classeId?: true
    specialisationId?: true
    raidId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    classeId?: true
    specialisationId?: true
    raidId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    classeId?: boolean
    specialisationId?: boolean
    raidId?: boolean
    createdAt?: boolean
    raid?: boolean | User$raidArgs<ExtArgs>
    createdRaids?: boolean | User$createdRaidsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    loots?: boolean | User$lootsArgs<ExtArgs>
    WishlistItem?: boolean | User$WishlistItemArgs<ExtArgs>
    RaidPoints?: boolean | User$RaidPointsArgs<ExtArgs>
    LootHistory?: boolean | User$LootHistoryArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    classeId?: boolean
    specialisationId?: boolean
    raidId?: boolean
    createdAt?: boolean
    raid?: boolean | User$raidArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    classeId?: boolean
    specialisationId?: boolean
    raidId?: boolean
    createdAt?: boolean
    raid?: boolean | User$raidArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    classeId?: boolean
    specialisationId?: boolean
    raidId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "classeId" | "specialisationId" | "raidId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raid?: boolean | User$raidArgs<ExtArgs>
    createdRaids?: boolean | User$createdRaidsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    loots?: boolean | User$lootsArgs<ExtArgs>
    WishlistItem?: boolean | User$WishlistItemArgs<ExtArgs>
    RaidPoints?: boolean | User$RaidPointsArgs<ExtArgs>
    LootHistory?: boolean | User$LootHistoryArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raid?: boolean | User$raidArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raid?: boolean | User$raidArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    specialisation?: boolean | SpecialisationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      raid: Prisma.$RaidPayload<ExtArgs> | null
      createdRaids: Prisma.$RaidPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
      loots: Prisma.$LootPayload<ExtArgs>[]
      WishlistItem: Prisma.$WishlistItemPayload<ExtArgs>[]
      RaidPoints: Prisma.$RaidPointsPayload<ExtArgs> | null
      LootHistory: Prisma.$LootHistoryPayload<ExtArgs>[]
      attendances: Prisma.$RaidAttendancePayload<ExtArgs>[]
      classe: Prisma.$ClassePayload<ExtArgs>
      specialisation: Prisma.$SpecialisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      classeId: number
      specialisationId: number
      raidId: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    raid<T extends User$raidArgs<ExtArgs> = {}>(args?: Subset<T, User$raidArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdRaids<T extends User$createdRaidsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRaidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends User$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loots<T extends User$lootsArgs<ExtArgs> = {}>(args?: Subset<T, User$lootsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WishlistItem<T extends User$WishlistItemArgs<ExtArgs> = {}>(args?: Subset<T, User$WishlistItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RaidPoints<T extends User$RaidPointsArgs<ExtArgs> = {}>(args?: Subset<T, User$RaidPointsArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    LootHistory<T extends User$LootHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$LootHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialisation<T extends SpecialisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialisationDefaultArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly classeId: FieldRef<"User", 'Int'>
    readonly specialisationId: FieldRef<"User", 'Int'>
    readonly raidId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.raid
   */
  export type User$raidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    where?: RaidWhereInput
  }

  /**
   * User.createdRaids
   */
  export type User$createdRaidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    where?: RaidWhereInput
    orderBy?: RaidOrderByWithRelationInput | RaidOrderByWithRelationInput[]
    cursor?: RaidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidScalarFieldEnum | RaidScalarFieldEnum[]
  }

  /**
   * User.joinRequests
   */
  export type User$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * User.loots
   */
  export type User$lootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    where?: LootWhereInput
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    cursor?: LootWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LootScalarFieldEnum | LootScalarFieldEnum[]
  }

  /**
   * User.WishlistItem
   */
  export type User$WishlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    cursor?: WishlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * User.RaidPoints
   */
  export type User$RaidPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    where?: RaidPointsWhereInput
  }

  /**
   * User.LootHistory
   */
  export type User$LootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    where?: LootHistoryWhereInput
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    cursor?: LootHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    where?: RaidAttendanceWhereInput
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    cursor?: RaidAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidAttendanceScalarFieldEnum | RaidAttendanceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseAvgAggregateOutputType = {
    id: number | null
  }

  export type ClasseSumAggregateOutputType = {
    id: number | null
  }

  export type ClasseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClasseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClasseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClasseAvgAggregateInputType = {
    id?: true
  }

  export type ClasseSumAggregateInputType = {
    id?: true
  }

  export type ClasseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClasseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClasseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe to aggregate.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type ClasseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasseWhereInput
    orderBy?: ClasseOrderByWithAggregationInput | ClasseOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: ClasseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _avg?: ClasseAvgAggregateInputType
    _sum?: ClasseSumAggregateInputType
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    id: number
    name: string
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type ClasseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialisation?: boolean | Classe$specialisationArgs<ExtArgs>
    users?: boolean | Classe$usersArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ClasseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["classe"]>
  export type ClasseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialisation?: boolean | Classe$specialisationArgs<ExtArgs>
    users?: boolean | Classe$usersArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClasseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classe"
    objects: {
      specialisation: Prisma.$SpecialisationPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = $Result.GetResult<Prisma.$ClassePayload, S>

  type ClasseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface ClasseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classe'], meta: { name: 'Classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {ClasseFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasseFindUniqueArgs>(args: SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasseFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasseFindFirstArgs>(args?: SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classeWithIdOnly = await prisma.classe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClasseFindManyArgs>(args?: SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {ClasseCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends ClasseCreateArgs>(args: SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClasseCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasseCreateManyArgs>(args?: SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClasseCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classeWithIdOnly = await prisma.classe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe.
     * @param {ClasseDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends ClasseDeleteArgs>(args: SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {ClasseUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasseUpdateArgs>(args: SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClasseDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasseDeleteManyArgs>(args?: SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasseUpdateManyArgs>(args: SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClasseUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classeWithIdOnly = await prisma.classe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe.
     * @param {ClasseUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends ClasseUpsertArgs>(args: SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClasseCountArgs>(
      args?: Subset<T, ClasseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClasseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasseGroupByArgs['orderBy'] }
        : { orderBy?: ClasseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classe model
   */
  readonly fields: ClasseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialisation<T extends Classe$specialisationArgs<ExtArgs> = {}>(args?: Subset<T, Classe$specialisationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Classe$usersArgs<ExtArgs> = {}>(args?: Subset<T, Classe$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classe model
   */
  interface ClasseFieldRefs {
    readonly id: FieldRef<"Classe", 'Int'>
    readonly name: FieldRef<"Classe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classe findUnique
   */
  export type ClasseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findUniqueOrThrow
   */
  export type ClasseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findFirst
   */
  export type ClasseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findFirstOrThrow
   */
  export type ClasseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findMany
   */
  export type ClasseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe create
   */
  export type ClasseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to create a Classe.
     */
    data: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
  }

  /**
   * Classe createMany
   */
  export type ClasseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe createManyAndReturn
   */
  export type ClasseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe update
   */
  export type ClasseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to update a Classe.
     */
    data: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
    /**
     * Choose, which Classe to update.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe updateMany
   */
  export type ClasseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe updateManyAndReturn
   */
  export type ClasseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe upsert
   */
  export type ClasseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The filter to search for the Classe to update in case it exists.
     */
    where: ClasseWhereUniqueInput
    /**
     * In case the Classe found by the `where` argument doesn't exist, create a new Classe with this data.
     */
    create: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
    /**
     * In case the Classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
  }

  /**
   * Classe delete
   */
  export type ClasseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter which Classe to delete.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe deleteMany
   */
  export type ClasseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classe.specialisation
   */
  export type Classe$specialisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    where?: SpecialisationWhereInput
    orderBy?: SpecialisationOrderByWithRelationInput | SpecialisationOrderByWithRelationInput[]
    cursor?: SpecialisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialisationScalarFieldEnum | SpecialisationScalarFieldEnum[]
  }

  /**
   * Classe.users
   */
  export type Classe$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Classe without action
   */
  export type ClasseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
  }


  /**
   * Model Specialisation
   */

  export type AggregateSpecialisation = {
    _count: SpecialisationCountAggregateOutputType | null
    _avg: SpecialisationAvgAggregateOutputType | null
    _sum: SpecialisationSumAggregateOutputType | null
    _min: SpecialisationMinAggregateOutputType | null
    _max: SpecialisationMaxAggregateOutputType | null
  }

  export type SpecialisationAvgAggregateOutputType = {
    id: number | null
    classeId: number | null
  }

  export type SpecialisationSumAggregateOutputType = {
    id: number | null
    classeId: number | null
  }

  export type SpecialisationMinAggregateOutputType = {
    id: number | null
    name: string | null
    classeId: number | null
  }

  export type SpecialisationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    classeId: number | null
  }

  export type SpecialisationCountAggregateOutputType = {
    id: number
    name: number
    classeId: number
    _all: number
  }


  export type SpecialisationAvgAggregateInputType = {
    id?: true
    classeId?: true
  }

  export type SpecialisationSumAggregateInputType = {
    id?: true
    classeId?: true
  }

  export type SpecialisationMinAggregateInputType = {
    id?: true
    name?: true
    classeId?: true
  }

  export type SpecialisationMaxAggregateInputType = {
    id?: true
    name?: true
    classeId?: true
  }

  export type SpecialisationCountAggregateInputType = {
    id?: true
    name?: true
    classeId?: true
    _all?: true
  }

  export type SpecialisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialisation to aggregate.
     */
    where?: SpecialisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialisations to fetch.
     */
    orderBy?: SpecialisationOrderByWithRelationInput | SpecialisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialisations
    **/
    _count?: true | SpecialisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialisationMaxAggregateInputType
  }

  export type GetSpecialisationAggregateType<T extends SpecialisationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialisation[P]>
      : GetScalarType<T[P], AggregateSpecialisation[P]>
  }




  export type SpecialisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialisationWhereInput
    orderBy?: SpecialisationOrderByWithAggregationInput | SpecialisationOrderByWithAggregationInput[]
    by: SpecialisationScalarFieldEnum[] | SpecialisationScalarFieldEnum
    having?: SpecialisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialisationCountAggregateInputType | true
    _avg?: SpecialisationAvgAggregateInputType
    _sum?: SpecialisationSumAggregateInputType
    _min?: SpecialisationMinAggregateInputType
    _max?: SpecialisationMaxAggregateInputType
  }

  export type SpecialisationGroupByOutputType = {
    id: number
    name: string
    classeId: number
    _count: SpecialisationCountAggregateOutputType | null
    _avg: SpecialisationAvgAggregateOutputType | null
    _sum: SpecialisationSumAggregateOutputType | null
    _min: SpecialisationMinAggregateOutputType | null
    _max: SpecialisationMaxAggregateOutputType | null
  }

  type GetSpecialisationGroupByPayload<T extends SpecialisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialisationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialisationGroupByOutputType[P]>
        }
      >
    >


  export type SpecialisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classeId?: boolean
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    users?: boolean | Specialisation$usersArgs<ExtArgs>
    _count?: boolean | SpecialisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialisation"]>

  export type SpecialisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classeId?: boolean
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialisation"]>

  export type SpecialisationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classeId?: boolean
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialisation"]>

  export type SpecialisationSelectScalar = {
    id?: boolean
    name?: boolean
    classeId?: boolean
  }

  export type SpecialisationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "classeId", ExtArgs["result"]["specialisation"]>
  export type SpecialisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    users?: boolean | Specialisation$usersArgs<ExtArgs>
    _count?: boolean | SpecialisationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }
  export type SpecialisationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }

  export type $SpecialisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialisation"
    objects: {
      classe: Prisma.$ClassePayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      classeId: number
    }, ExtArgs["result"]["specialisation"]>
    composites: {}
  }

  type SpecialisationGetPayload<S extends boolean | null | undefined | SpecialisationDefaultArgs> = $Result.GetResult<Prisma.$SpecialisationPayload, S>

  type SpecialisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialisationCountAggregateInputType | true
    }

  export interface SpecialisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialisation'], meta: { name: 'Specialisation' } }
    /**
     * Find zero or one Specialisation that matches the filter.
     * @param {SpecialisationFindUniqueArgs} args - Arguments to find a Specialisation
     * @example
     * // Get one Specialisation
     * const specialisation = await prisma.specialisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialisationFindUniqueArgs>(args: SelectSubset<T, SpecialisationFindUniqueArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialisationFindUniqueOrThrowArgs} args - Arguments to find a Specialisation
     * @example
     * // Get one Specialisation
     * const specialisation = await prisma.specialisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialisationFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationFindFirstArgs} args - Arguments to find a Specialisation
     * @example
     * // Get one Specialisation
     * const specialisation = await prisma.specialisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialisationFindFirstArgs>(args?: SelectSubset<T, SpecialisationFindFirstArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationFindFirstOrThrowArgs} args - Arguments to find a Specialisation
     * @example
     * // Get one Specialisation
     * const specialisation = await prisma.specialisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialisationFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialisations
     * const specialisations = await prisma.specialisation.findMany()
     * 
     * // Get first 10 Specialisations
     * const specialisations = await prisma.specialisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialisationWithIdOnly = await prisma.specialisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialisationFindManyArgs>(args?: SelectSubset<T, SpecialisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialisation.
     * @param {SpecialisationCreateArgs} args - Arguments to create a Specialisation.
     * @example
     * // Create one Specialisation
     * const Specialisation = await prisma.specialisation.create({
     *   data: {
     *     // ... data to create a Specialisation
     *   }
     * })
     * 
     */
    create<T extends SpecialisationCreateArgs>(args: SelectSubset<T, SpecialisationCreateArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialisations.
     * @param {SpecialisationCreateManyArgs} args - Arguments to create many Specialisations.
     * @example
     * // Create many Specialisations
     * const specialisation = await prisma.specialisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialisationCreateManyArgs>(args?: SelectSubset<T, SpecialisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialisations and returns the data saved in the database.
     * @param {SpecialisationCreateManyAndReturnArgs} args - Arguments to create many Specialisations.
     * @example
     * // Create many Specialisations
     * const specialisation = await prisma.specialisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialisations and only return the `id`
     * const specialisationWithIdOnly = await prisma.specialisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialisationCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialisation.
     * @param {SpecialisationDeleteArgs} args - Arguments to delete one Specialisation.
     * @example
     * // Delete one Specialisation
     * const Specialisation = await prisma.specialisation.delete({
     *   where: {
     *     // ... filter to delete one Specialisation
     *   }
     * })
     * 
     */
    delete<T extends SpecialisationDeleteArgs>(args: SelectSubset<T, SpecialisationDeleteArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialisation.
     * @param {SpecialisationUpdateArgs} args - Arguments to update one Specialisation.
     * @example
     * // Update one Specialisation
     * const specialisation = await prisma.specialisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialisationUpdateArgs>(args: SelectSubset<T, SpecialisationUpdateArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialisations.
     * @param {SpecialisationDeleteManyArgs} args - Arguments to filter Specialisations to delete.
     * @example
     * // Delete a few Specialisations
     * const { count } = await prisma.specialisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialisationDeleteManyArgs>(args?: SelectSubset<T, SpecialisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialisations
     * const specialisation = await prisma.specialisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialisationUpdateManyArgs>(args: SelectSubset<T, SpecialisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialisations and returns the data updated in the database.
     * @param {SpecialisationUpdateManyAndReturnArgs} args - Arguments to update many Specialisations.
     * @example
     * // Update many Specialisations
     * const specialisation = await prisma.specialisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialisations and only return the `id`
     * const specialisationWithIdOnly = await prisma.specialisation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialisationUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialisation.
     * @param {SpecialisationUpsertArgs} args - Arguments to update or create a Specialisation.
     * @example
     * // Update or create a Specialisation
     * const specialisation = await prisma.specialisation.upsert({
     *   create: {
     *     // ... data to create a Specialisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialisation we want to update
     *   }
     * })
     */
    upsert<T extends SpecialisationUpsertArgs>(args: SelectSubset<T, SpecialisationUpsertArgs<ExtArgs>>): Prisma__SpecialisationClient<$Result.GetResult<Prisma.$SpecialisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationCountArgs} args - Arguments to filter Specialisations to count.
     * @example
     * // Count the number of Specialisations
     * const count = await prisma.specialisation.count({
     *   where: {
     *     // ... the filter for the Specialisations we want to count
     *   }
     * })
    **/
    count<T extends SpecialisationCountArgs>(
      args?: Subset<T, SpecialisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialisationAggregateArgs>(args: Subset<T, SpecialisationAggregateArgs>): Prisma.PrismaPromise<GetSpecialisationAggregateType<T>>

    /**
     * Group by Specialisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialisationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialisationGroupByArgs['orderBy'] }
        : { orderBy?: SpecialisationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialisation model
   */
  readonly fields: SpecialisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Specialisation$usersArgs<ExtArgs> = {}>(args?: Subset<T, Specialisation$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialisation model
   */
  interface SpecialisationFieldRefs {
    readonly id: FieldRef<"Specialisation", 'Int'>
    readonly name: FieldRef<"Specialisation", 'String'>
    readonly classeId: FieldRef<"Specialisation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Specialisation findUnique
   */
  export type SpecialisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter, which Specialisation to fetch.
     */
    where: SpecialisationWhereUniqueInput
  }

  /**
   * Specialisation findUniqueOrThrow
   */
  export type SpecialisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter, which Specialisation to fetch.
     */
    where: SpecialisationWhereUniqueInput
  }

  /**
   * Specialisation findFirst
   */
  export type SpecialisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter, which Specialisation to fetch.
     */
    where?: SpecialisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialisations to fetch.
     */
    orderBy?: SpecialisationOrderByWithRelationInput | SpecialisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialisations.
     */
    cursor?: SpecialisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialisations.
     */
    distinct?: SpecialisationScalarFieldEnum | SpecialisationScalarFieldEnum[]
  }

  /**
   * Specialisation findFirstOrThrow
   */
  export type SpecialisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter, which Specialisation to fetch.
     */
    where?: SpecialisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialisations to fetch.
     */
    orderBy?: SpecialisationOrderByWithRelationInput | SpecialisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialisations.
     */
    cursor?: SpecialisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialisations.
     */
    distinct?: SpecialisationScalarFieldEnum | SpecialisationScalarFieldEnum[]
  }

  /**
   * Specialisation findMany
   */
  export type SpecialisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter, which Specialisations to fetch.
     */
    where?: SpecialisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialisations to fetch.
     */
    orderBy?: SpecialisationOrderByWithRelationInput | SpecialisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialisations.
     */
    cursor?: SpecialisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialisations.
     */
    skip?: number
    distinct?: SpecialisationScalarFieldEnum | SpecialisationScalarFieldEnum[]
  }

  /**
   * Specialisation create
   */
  export type SpecialisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialisation.
     */
    data: XOR<SpecialisationCreateInput, SpecialisationUncheckedCreateInput>
  }

  /**
   * Specialisation createMany
   */
  export type SpecialisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialisations.
     */
    data: SpecialisationCreateManyInput | SpecialisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialisation createManyAndReturn
   */
  export type SpecialisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * The data used to create many Specialisations.
     */
    data: SpecialisationCreateManyInput | SpecialisationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specialisation update
   */
  export type SpecialisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialisation.
     */
    data: XOR<SpecialisationUpdateInput, SpecialisationUncheckedUpdateInput>
    /**
     * Choose, which Specialisation to update.
     */
    where: SpecialisationWhereUniqueInput
  }

  /**
   * Specialisation updateMany
   */
  export type SpecialisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialisations.
     */
    data: XOR<SpecialisationUpdateManyMutationInput, SpecialisationUncheckedUpdateManyInput>
    /**
     * Filter which Specialisations to update
     */
    where?: SpecialisationWhereInput
    /**
     * Limit how many Specialisations to update.
     */
    limit?: number
  }

  /**
   * Specialisation updateManyAndReturn
   */
  export type SpecialisationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * The data used to update Specialisations.
     */
    data: XOR<SpecialisationUpdateManyMutationInput, SpecialisationUncheckedUpdateManyInput>
    /**
     * Filter which Specialisations to update
     */
    where?: SpecialisationWhereInput
    /**
     * Limit how many Specialisations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specialisation upsert
   */
  export type SpecialisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialisation to update in case it exists.
     */
    where: SpecialisationWhereUniqueInput
    /**
     * In case the Specialisation found by the `where` argument doesn't exist, create a new Specialisation with this data.
     */
    create: XOR<SpecialisationCreateInput, SpecialisationUncheckedCreateInput>
    /**
     * In case the Specialisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialisationUpdateInput, SpecialisationUncheckedUpdateInput>
  }

  /**
   * Specialisation delete
   */
  export type SpecialisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
    /**
     * Filter which Specialisation to delete.
     */
    where: SpecialisationWhereUniqueInput
  }

  /**
   * Specialisation deleteMany
   */
  export type SpecialisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialisations to delete
     */
    where?: SpecialisationWhereInput
    /**
     * Limit how many Specialisations to delete.
     */
    limit?: number
  }

  /**
   * Specialisation.users
   */
  export type Specialisation$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Specialisation without action
   */
  export type SpecialisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialisation
     */
    select?: SpecialisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialisation
     */
    omit?: SpecialisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialisationInclude<ExtArgs> | null
  }


  /**
   * Model Raid
   */

  export type AggregateRaid = {
    _count: RaidCountAggregateOutputType | null
    _avg: RaidAvgAggregateOutputType | null
    _sum: RaidSumAggregateOutputType | null
    _min: RaidMinAggregateOutputType | null
    _max: RaidMaxAggregateOutputType | null
  }

  export type RaidAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type RaidSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type RaidMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdById: number | null
  }

  export type RaidMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdById: number | null
  }

  export type RaidCountAggregateOutputType = {
    id: number
    name: number
    createdById: number
    _all: number
  }


  export type RaidAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type RaidSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type RaidMinAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
  }

  export type RaidMaxAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
  }

  export type RaidCountAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    _all?: true
  }

  export type RaidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raid to aggregate.
     */
    where?: RaidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raids to fetch.
     */
    orderBy?: RaidOrderByWithRelationInput | RaidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Raids
    **/
    _count?: true | RaidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidMaxAggregateInputType
  }

  export type GetRaidAggregateType<T extends RaidAggregateArgs> = {
        [P in keyof T & keyof AggregateRaid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaid[P]>
      : GetScalarType<T[P], AggregateRaid[P]>
  }




  export type RaidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidWhereInput
    orderBy?: RaidOrderByWithAggregationInput | RaidOrderByWithAggregationInput[]
    by: RaidScalarFieldEnum[] | RaidScalarFieldEnum
    having?: RaidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidCountAggregateInputType | true
    _avg?: RaidAvgAggregateInputType
    _sum?: RaidSumAggregateInputType
    _min?: RaidMinAggregateInputType
    _max?: RaidMaxAggregateInputType
  }

  export type RaidGroupByOutputType = {
    id: number
    name: string
    createdById: number
    _count: RaidCountAggregateOutputType | null
    _avg: RaidAvgAggregateOutputType | null
    _sum: RaidSumAggregateOutputType | null
    _min: RaidMinAggregateOutputType | null
    _max: RaidMaxAggregateOutputType | null
  }

  type GetRaidGroupByPayload<T extends RaidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidGroupByOutputType[P]>
            : GetScalarType<T[P], RaidGroupByOutputType[P]>
        }
      >
    >


  export type RaidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    RaidPoints?: boolean | Raid$RaidPointsArgs<ExtArgs>
    LootHistory?: boolean | Raid$LootHistoryArgs<ExtArgs>
    attendances?: boolean | Raid$attendancesArgs<ExtArgs>
    users?: boolean | Raid$usersArgs<ExtArgs>
    joinRequests?: boolean | Raid$joinRequestsArgs<ExtArgs>
    _count?: boolean | RaidCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raid"]>

  export type RaidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raid"]>

  export type RaidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raid"]>

  export type RaidSelectScalar = {
    id?: boolean
    name?: boolean
    createdById?: boolean
  }

  export type RaidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdById", ExtArgs["result"]["raid"]>
  export type RaidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    RaidPoints?: boolean | Raid$RaidPointsArgs<ExtArgs>
    LootHistory?: boolean | Raid$LootHistoryArgs<ExtArgs>
    attendances?: boolean | Raid$attendancesArgs<ExtArgs>
    users?: boolean | Raid$usersArgs<ExtArgs>
    joinRequests?: boolean | Raid$joinRequestsArgs<ExtArgs>
    _count?: boolean | RaidCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RaidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RaidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Raid"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      RaidPoints: Prisma.$RaidPointsPayload<ExtArgs>[]
      LootHistory: Prisma.$LootHistoryPayload<ExtArgs>[]
      attendances: Prisma.$RaidAttendancePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdById: number
    }, ExtArgs["result"]["raid"]>
    composites: {}
  }

  type RaidGetPayload<S extends boolean | null | undefined | RaidDefaultArgs> = $Result.GetResult<Prisma.$RaidPayload, S>

  type RaidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaidCountAggregateInputType | true
    }

  export interface RaidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Raid'], meta: { name: 'Raid' } }
    /**
     * Find zero or one Raid that matches the filter.
     * @param {RaidFindUniqueArgs} args - Arguments to find a Raid
     * @example
     * // Get one Raid
     * const raid = await prisma.raid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidFindUniqueArgs>(args: SelectSubset<T, RaidFindUniqueArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaidFindUniqueOrThrowArgs} args - Arguments to find a Raid
     * @example
     * // Get one Raid
     * const raid = await prisma.raid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidFindFirstArgs} args - Arguments to find a Raid
     * @example
     * // Get one Raid
     * const raid = await prisma.raid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidFindFirstArgs>(args?: SelectSubset<T, RaidFindFirstArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidFindFirstOrThrowArgs} args - Arguments to find a Raid
     * @example
     * // Get one Raid
     * const raid = await prisma.raid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raids
     * const raids = await prisma.raid.findMany()
     * 
     * // Get first 10 Raids
     * const raids = await prisma.raid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidWithIdOnly = await prisma.raid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidFindManyArgs>(args?: SelectSubset<T, RaidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raid.
     * @param {RaidCreateArgs} args - Arguments to create a Raid.
     * @example
     * // Create one Raid
     * const Raid = await prisma.raid.create({
     *   data: {
     *     // ... data to create a Raid
     *   }
     * })
     * 
     */
    create<T extends RaidCreateArgs>(args: SelectSubset<T, RaidCreateArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raids.
     * @param {RaidCreateManyArgs} args - Arguments to create many Raids.
     * @example
     * // Create many Raids
     * const raid = await prisma.raid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidCreateManyArgs>(args?: SelectSubset<T, RaidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raids and returns the data saved in the database.
     * @param {RaidCreateManyAndReturnArgs} args - Arguments to create many Raids.
     * @example
     * // Create many Raids
     * const raid = await prisma.raid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raids and only return the `id`
     * const raidWithIdOnly = await prisma.raid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raid.
     * @param {RaidDeleteArgs} args - Arguments to delete one Raid.
     * @example
     * // Delete one Raid
     * const Raid = await prisma.raid.delete({
     *   where: {
     *     // ... filter to delete one Raid
     *   }
     * })
     * 
     */
    delete<T extends RaidDeleteArgs>(args: SelectSubset<T, RaidDeleteArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raid.
     * @param {RaidUpdateArgs} args - Arguments to update one Raid.
     * @example
     * // Update one Raid
     * const raid = await prisma.raid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidUpdateArgs>(args: SelectSubset<T, RaidUpdateArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raids.
     * @param {RaidDeleteManyArgs} args - Arguments to filter Raids to delete.
     * @example
     * // Delete a few Raids
     * const { count } = await prisma.raid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidDeleteManyArgs>(args?: SelectSubset<T, RaidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raids
     * const raid = await prisma.raid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidUpdateManyArgs>(args: SelectSubset<T, RaidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raids and returns the data updated in the database.
     * @param {RaidUpdateManyAndReturnArgs} args - Arguments to update many Raids.
     * @example
     * // Update many Raids
     * const raid = await prisma.raid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raids and only return the `id`
     * const raidWithIdOnly = await prisma.raid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaidUpdateManyAndReturnArgs>(args: SelectSubset<T, RaidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raid.
     * @param {RaidUpsertArgs} args - Arguments to update or create a Raid.
     * @example
     * // Update or create a Raid
     * const raid = await prisma.raid.upsert({
     *   create: {
     *     // ... data to create a Raid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raid we want to update
     *   }
     * })
     */
    upsert<T extends RaidUpsertArgs>(args: SelectSubset<T, RaidUpsertArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidCountArgs} args - Arguments to filter Raids to count.
     * @example
     * // Count the number of Raids
     * const count = await prisma.raid.count({
     *   where: {
     *     // ... the filter for the Raids we want to count
     *   }
     * })
    **/
    count<T extends RaidCountArgs>(
      args?: Subset<T, RaidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidAggregateArgs>(args: Subset<T, RaidAggregateArgs>): Prisma.PrismaPromise<GetRaidAggregateType<T>>

    /**
     * Group by Raid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidGroupByArgs['orderBy'] }
        : { orderBy?: RaidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Raid model
   */
  readonly fields: RaidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Raid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RaidPoints<T extends Raid$RaidPointsArgs<ExtArgs> = {}>(args?: Subset<T, Raid$RaidPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LootHistory<T extends Raid$LootHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Raid$LootHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Raid$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Raid$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Raid$usersArgs<ExtArgs> = {}>(args?: Subset<T, Raid$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends Raid$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Raid$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Raid model
   */
  interface RaidFieldRefs {
    readonly id: FieldRef<"Raid", 'Int'>
    readonly name: FieldRef<"Raid", 'String'>
    readonly createdById: FieldRef<"Raid", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Raid findUnique
   */
  export type RaidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter, which Raid to fetch.
     */
    where: RaidWhereUniqueInput
  }

  /**
   * Raid findUniqueOrThrow
   */
  export type RaidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter, which Raid to fetch.
     */
    where: RaidWhereUniqueInput
  }

  /**
   * Raid findFirst
   */
  export type RaidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter, which Raid to fetch.
     */
    where?: RaidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raids to fetch.
     */
    orderBy?: RaidOrderByWithRelationInput | RaidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raids.
     */
    cursor?: RaidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raids.
     */
    distinct?: RaidScalarFieldEnum | RaidScalarFieldEnum[]
  }

  /**
   * Raid findFirstOrThrow
   */
  export type RaidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter, which Raid to fetch.
     */
    where?: RaidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raids to fetch.
     */
    orderBy?: RaidOrderByWithRelationInput | RaidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raids.
     */
    cursor?: RaidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raids.
     */
    distinct?: RaidScalarFieldEnum | RaidScalarFieldEnum[]
  }

  /**
   * Raid findMany
   */
  export type RaidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter, which Raids to fetch.
     */
    where?: RaidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raids to fetch.
     */
    orderBy?: RaidOrderByWithRelationInput | RaidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Raids.
     */
    cursor?: RaidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raids.
     */
    skip?: number
    distinct?: RaidScalarFieldEnum | RaidScalarFieldEnum[]
  }

  /**
   * Raid create
   */
  export type RaidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * The data needed to create a Raid.
     */
    data: XOR<RaidCreateInput, RaidUncheckedCreateInput>
  }

  /**
   * Raid createMany
   */
  export type RaidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Raids.
     */
    data: RaidCreateManyInput | RaidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raid createManyAndReturn
   */
  export type RaidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * The data used to create many Raids.
     */
    data: RaidCreateManyInput | RaidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Raid update
   */
  export type RaidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * The data needed to update a Raid.
     */
    data: XOR<RaidUpdateInput, RaidUncheckedUpdateInput>
    /**
     * Choose, which Raid to update.
     */
    where: RaidWhereUniqueInput
  }

  /**
   * Raid updateMany
   */
  export type RaidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Raids.
     */
    data: XOR<RaidUpdateManyMutationInput, RaidUncheckedUpdateManyInput>
    /**
     * Filter which Raids to update
     */
    where?: RaidWhereInput
    /**
     * Limit how many Raids to update.
     */
    limit?: number
  }

  /**
   * Raid updateManyAndReturn
   */
  export type RaidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * The data used to update Raids.
     */
    data: XOR<RaidUpdateManyMutationInput, RaidUncheckedUpdateManyInput>
    /**
     * Filter which Raids to update
     */
    where?: RaidWhereInput
    /**
     * Limit how many Raids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Raid upsert
   */
  export type RaidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * The filter to search for the Raid to update in case it exists.
     */
    where: RaidWhereUniqueInput
    /**
     * In case the Raid found by the `where` argument doesn't exist, create a new Raid with this data.
     */
    create: XOR<RaidCreateInput, RaidUncheckedCreateInput>
    /**
     * In case the Raid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidUpdateInput, RaidUncheckedUpdateInput>
  }

  /**
   * Raid delete
   */
  export type RaidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
    /**
     * Filter which Raid to delete.
     */
    where: RaidWhereUniqueInput
  }

  /**
   * Raid deleteMany
   */
  export type RaidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raids to delete
     */
    where?: RaidWhereInput
    /**
     * Limit how many Raids to delete.
     */
    limit?: number
  }

  /**
   * Raid.RaidPoints
   */
  export type Raid$RaidPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    where?: RaidPointsWhereInput
    orderBy?: RaidPointsOrderByWithRelationInput | RaidPointsOrderByWithRelationInput[]
    cursor?: RaidPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidPointsScalarFieldEnum | RaidPointsScalarFieldEnum[]
  }

  /**
   * Raid.LootHistory
   */
  export type Raid$LootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    where?: LootHistoryWhereInput
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    cursor?: LootHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * Raid.attendances
   */
  export type Raid$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    where?: RaidAttendanceWhereInput
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    cursor?: RaidAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidAttendanceScalarFieldEnum | RaidAttendanceScalarFieldEnum[]
  }

  /**
   * Raid.users
   */
  export type Raid$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Raid.joinRequests
   */
  export type Raid$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * Raid without action
   */
  export type RaidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raid
     */
    select?: RaidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raid
     */
    omit?: RaidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidInclude<ExtArgs> | null
  }


  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _avg: JoinRequestAvgAggregateOutputType | null
    _sum: JoinRequestSumAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
  }

  export type JoinRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    userId: number
    raidId: number
    status: number
    createdAt: number
    _all: number
  }


  export type JoinRequestAvgAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
  }

  export type JoinRequestSumAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
  }

  export type JoinRequestMinAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    status?: true
    createdAt?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    status?: true
    createdAt?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoinRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoinRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _avg?: JoinRequestAvgAggregateInputType
    _sum?: JoinRequestSumAggregateInputType
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: number
    userId: number
    raidId: number
    status: string
    createdAt: Date
    _count: JoinRequestCountAggregateOutputType | null
    _avg: JoinRequestAvgAggregateOutputType | null
    _sum: JoinRequestSumAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    raidId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "raidId" | "status" | "createdAt", ExtArgs["result"]["joinRequest"]>
  export type JoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      raid: Prisma.$RaidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      raidId: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinRequests and returns the data saved in the database.
     * @param {JoinRequestCreateManyAndReturnArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, JoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests and returns the data updated in the database.
     * @param {JoinRequestUpdateManyAndReturnArgs} args - Arguments to update many JoinRequests.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, JoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raid<T extends RaidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaidDefaultArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'Int'>
    readonly userId: FieldRef<"JoinRequest", 'Int'>
    readonly raidId: FieldRef<"JoinRequest", 'Int'>
    readonly status: FieldRef<"JoinRequest", 'String'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinRequest createManyAndReturn
   */
  export type JoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest updateManyAndReturn
   */
  export type JoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model RaidPoints
   */

  export type AggregateRaidPoints = {
    _count: RaidPointsCountAggregateOutputType | null
    _avg: RaidPointsAvgAggregateOutputType | null
    _sum: RaidPointsSumAggregateOutputType | null
    _min: RaidPointsMinAggregateOutputType | null
    _max: RaidPointsMaxAggregateOutputType | null
  }

  export type RaidPointsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    points: number | null
  }

  export type RaidPointsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    points: number | null
  }

  export type RaidPointsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    points: number | null
  }

  export type RaidPointsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    points: number | null
  }

  export type RaidPointsCountAggregateOutputType = {
    id: number
    userId: number
    raidId: number
    points: number
    _all: number
  }


  export type RaidPointsAvgAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    points?: true
  }

  export type RaidPointsSumAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    points?: true
  }

  export type RaidPointsMinAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    points?: true
  }

  export type RaidPointsMaxAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    points?: true
  }

  export type RaidPointsCountAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    points?: true
    _all?: true
  }

  export type RaidPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidPoints to aggregate.
     */
    where?: RaidPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidPoints to fetch.
     */
    orderBy?: RaidPointsOrderByWithRelationInput | RaidPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaidPoints
    **/
    _count?: true | RaidPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaidPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaidPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidPointsMaxAggregateInputType
  }

  export type GetRaidPointsAggregateType<T extends RaidPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaidPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaidPoints[P]>
      : GetScalarType<T[P], AggregateRaidPoints[P]>
  }




  export type RaidPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidPointsWhereInput
    orderBy?: RaidPointsOrderByWithAggregationInput | RaidPointsOrderByWithAggregationInput[]
    by: RaidPointsScalarFieldEnum[] | RaidPointsScalarFieldEnum
    having?: RaidPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidPointsCountAggregateInputType | true
    _avg?: RaidPointsAvgAggregateInputType
    _sum?: RaidPointsSumAggregateInputType
    _min?: RaidPointsMinAggregateInputType
    _max?: RaidPointsMaxAggregateInputType
  }

  export type RaidPointsGroupByOutputType = {
    id: number
    userId: number
    raidId: number
    points: number
    _count: RaidPointsCountAggregateOutputType | null
    _avg: RaidPointsAvgAggregateOutputType | null
    _sum: RaidPointsSumAggregateOutputType | null
    _min: RaidPointsMinAggregateOutputType | null
    _max: RaidPointsMaxAggregateOutputType | null
  }

  type GetRaidPointsGroupByPayload<T extends RaidPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidPointsGroupByOutputType[P]>
            : GetScalarType<T[P], RaidPointsGroupByOutputType[P]>
        }
      >
    >


  export type RaidPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidPoints"]>

  export type RaidPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidPoints"]>

  export type RaidPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidPoints"]>

  export type RaidPointsSelectScalar = {
    id?: boolean
    userId?: boolean
    raidId?: boolean
    points?: boolean
  }

  export type RaidPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "raidId" | "points", ExtArgs["result"]["raidPoints"]>
  export type RaidPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type RaidPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type RaidPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }

  export type $RaidPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaidPoints"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      raid: Prisma.$RaidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      raidId: number
      points: number
    }, ExtArgs["result"]["raidPoints"]>
    composites: {}
  }

  type RaidPointsGetPayload<S extends boolean | null | undefined | RaidPointsDefaultArgs> = $Result.GetResult<Prisma.$RaidPointsPayload, S>

  type RaidPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaidPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaidPointsCountAggregateInputType | true
    }

  export interface RaidPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaidPoints'], meta: { name: 'RaidPoints' } }
    /**
     * Find zero or one RaidPoints that matches the filter.
     * @param {RaidPointsFindUniqueArgs} args - Arguments to find a RaidPoints
     * @example
     * // Get one RaidPoints
     * const raidPoints = await prisma.raidPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidPointsFindUniqueArgs>(args: SelectSubset<T, RaidPointsFindUniqueArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaidPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaidPointsFindUniqueOrThrowArgs} args - Arguments to find a RaidPoints
     * @example
     * // Get one RaidPoints
     * const raidPoints = await prisma.raidPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaidPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsFindFirstArgs} args - Arguments to find a RaidPoints
     * @example
     * // Get one RaidPoints
     * const raidPoints = await prisma.raidPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidPointsFindFirstArgs>(args?: SelectSubset<T, RaidPointsFindFirstArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaidPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsFindFirstOrThrowArgs} args - Arguments to find a RaidPoints
     * @example
     * // Get one RaidPoints
     * const raidPoints = await prisma.raidPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaidPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaidPoints
     * const raidPoints = await prisma.raidPoints.findMany()
     * 
     * // Get first 10 RaidPoints
     * const raidPoints = await prisma.raidPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidPointsWithIdOnly = await prisma.raidPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidPointsFindManyArgs>(args?: SelectSubset<T, RaidPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaidPoints.
     * @param {RaidPointsCreateArgs} args - Arguments to create a RaidPoints.
     * @example
     * // Create one RaidPoints
     * const RaidPoints = await prisma.raidPoints.create({
     *   data: {
     *     // ... data to create a RaidPoints
     *   }
     * })
     * 
     */
    create<T extends RaidPointsCreateArgs>(args: SelectSubset<T, RaidPointsCreateArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaidPoints.
     * @param {RaidPointsCreateManyArgs} args - Arguments to create many RaidPoints.
     * @example
     * // Create many RaidPoints
     * const raidPoints = await prisma.raidPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidPointsCreateManyArgs>(args?: SelectSubset<T, RaidPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaidPoints and returns the data saved in the database.
     * @param {RaidPointsCreateManyAndReturnArgs} args - Arguments to create many RaidPoints.
     * @example
     * // Create many RaidPoints
     * const raidPoints = await prisma.raidPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaidPoints and only return the `id`
     * const raidPointsWithIdOnly = await prisma.raidPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaidPoints.
     * @param {RaidPointsDeleteArgs} args - Arguments to delete one RaidPoints.
     * @example
     * // Delete one RaidPoints
     * const RaidPoints = await prisma.raidPoints.delete({
     *   where: {
     *     // ... filter to delete one RaidPoints
     *   }
     * })
     * 
     */
    delete<T extends RaidPointsDeleteArgs>(args: SelectSubset<T, RaidPointsDeleteArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaidPoints.
     * @param {RaidPointsUpdateArgs} args - Arguments to update one RaidPoints.
     * @example
     * // Update one RaidPoints
     * const raidPoints = await prisma.raidPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidPointsUpdateArgs>(args: SelectSubset<T, RaidPointsUpdateArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaidPoints.
     * @param {RaidPointsDeleteManyArgs} args - Arguments to filter RaidPoints to delete.
     * @example
     * // Delete a few RaidPoints
     * const { count } = await prisma.raidPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidPointsDeleteManyArgs>(args?: SelectSubset<T, RaidPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaidPoints
     * const raidPoints = await prisma.raidPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidPointsUpdateManyArgs>(args: SelectSubset<T, RaidPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidPoints and returns the data updated in the database.
     * @param {RaidPointsUpdateManyAndReturnArgs} args - Arguments to update many RaidPoints.
     * @example
     * // Update many RaidPoints
     * const raidPoints = await prisma.raidPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaidPoints and only return the `id`
     * const raidPointsWithIdOnly = await prisma.raidPoints.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaidPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, RaidPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaidPoints.
     * @param {RaidPointsUpsertArgs} args - Arguments to update or create a RaidPoints.
     * @example
     * // Update or create a RaidPoints
     * const raidPoints = await prisma.raidPoints.upsert({
     *   create: {
     *     // ... data to create a RaidPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaidPoints we want to update
     *   }
     * })
     */
    upsert<T extends RaidPointsUpsertArgs>(args: SelectSubset<T, RaidPointsUpsertArgs<ExtArgs>>): Prisma__RaidPointsClient<$Result.GetResult<Prisma.$RaidPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaidPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsCountArgs} args - Arguments to filter RaidPoints to count.
     * @example
     * // Count the number of RaidPoints
     * const count = await prisma.raidPoints.count({
     *   where: {
     *     // ... the filter for the RaidPoints we want to count
     *   }
     * })
    **/
    count<T extends RaidPointsCountArgs>(
      args?: Subset<T, RaidPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaidPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidPointsAggregateArgs>(args: Subset<T, RaidPointsAggregateArgs>): Prisma.PrismaPromise<GetRaidPointsAggregateType<T>>

    /**
     * Group by RaidPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidPointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidPointsGroupByArgs['orderBy'] }
        : { orderBy?: RaidPointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaidPoints model
   */
  readonly fields: RaidPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaidPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raid<T extends RaidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaidDefaultArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaidPoints model
   */
  interface RaidPointsFieldRefs {
    readonly id: FieldRef<"RaidPoints", 'Int'>
    readonly userId: FieldRef<"RaidPoints", 'Int'>
    readonly raidId: FieldRef<"RaidPoints", 'Int'>
    readonly points: FieldRef<"RaidPoints", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RaidPoints findUnique
   */
  export type RaidPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter, which RaidPoints to fetch.
     */
    where: RaidPointsWhereUniqueInput
  }

  /**
   * RaidPoints findUniqueOrThrow
   */
  export type RaidPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter, which RaidPoints to fetch.
     */
    where: RaidPointsWhereUniqueInput
  }

  /**
   * RaidPoints findFirst
   */
  export type RaidPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter, which RaidPoints to fetch.
     */
    where?: RaidPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidPoints to fetch.
     */
    orderBy?: RaidPointsOrderByWithRelationInput | RaidPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidPoints.
     */
    cursor?: RaidPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidPoints.
     */
    distinct?: RaidPointsScalarFieldEnum | RaidPointsScalarFieldEnum[]
  }

  /**
   * RaidPoints findFirstOrThrow
   */
  export type RaidPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter, which RaidPoints to fetch.
     */
    where?: RaidPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidPoints to fetch.
     */
    orderBy?: RaidPointsOrderByWithRelationInput | RaidPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidPoints.
     */
    cursor?: RaidPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidPoints.
     */
    distinct?: RaidPointsScalarFieldEnum | RaidPointsScalarFieldEnum[]
  }

  /**
   * RaidPoints findMany
   */
  export type RaidPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter, which RaidPoints to fetch.
     */
    where?: RaidPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidPoints to fetch.
     */
    orderBy?: RaidPointsOrderByWithRelationInput | RaidPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaidPoints.
     */
    cursor?: RaidPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidPoints.
     */
    skip?: number
    distinct?: RaidPointsScalarFieldEnum | RaidPointsScalarFieldEnum[]
  }

  /**
   * RaidPoints create
   */
  export type RaidPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a RaidPoints.
     */
    data: XOR<RaidPointsCreateInput, RaidPointsUncheckedCreateInput>
  }

  /**
   * RaidPoints createMany
   */
  export type RaidPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaidPoints.
     */
    data: RaidPointsCreateManyInput | RaidPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaidPoints createManyAndReturn
   */
  export type RaidPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * The data used to create many RaidPoints.
     */
    data: RaidPointsCreateManyInput | RaidPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidPoints update
   */
  export type RaidPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a RaidPoints.
     */
    data: XOR<RaidPointsUpdateInput, RaidPointsUncheckedUpdateInput>
    /**
     * Choose, which RaidPoints to update.
     */
    where: RaidPointsWhereUniqueInput
  }

  /**
   * RaidPoints updateMany
   */
  export type RaidPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaidPoints.
     */
    data: XOR<RaidPointsUpdateManyMutationInput, RaidPointsUncheckedUpdateManyInput>
    /**
     * Filter which RaidPoints to update
     */
    where?: RaidPointsWhereInput
    /**
     * Limit how many RaidPoints to update.
     */
    limit?: number
  }

  /**
   * RaidPoints updateManyAndReturn
   */
  export type RaidPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * The data used to update RaidPoints.
     */
    data: XOR<RaidPointsUpdateManyMutationInput, RaidPointsUncheckedUpdateManyInput>
    /**
     * Filter which RaidPoints to update
     */
    where?: RaidPointsWhereInput
    /**
     * Limit how many RaidPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidPoints upsert
   */
  export type RaidPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the RaidPoints to update in case it exists.
     */
    where: RaidPointsWhereUniqueInput
    /**
     * In case the RaidPoints found by the `where` argument doesn't exist, create a new RaidPoints with this data.
     */
    create: XOR<RaidPointsCreateInput, RaidPointsUncheckedCreateInput>
    /**
     * In case the RaidPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidPointsUpdateInput, RaidPointsUncheckedUpdateInput>
  }

  /**
   * RaidPoints delete
   */
  export type RaidPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
    /**
     * Filter which RaidPoints to delete.
     */
    where: RaidPointsWhereUniqueInput
  }

  /**
   * RaidPoints deleteMany
   */
  export type RaidPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidPoints to delete
     */
    where?: RaidPointsWhereInput
    /**
     * Limit how many RaidPoints to delete.
     */
    limit?: number
  }

  /**
   * RaidPoints without action
   */
  export type RaidPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidPoints
     */
    select?: RaidPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidPoints
     */
    omit?: RaidPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidPointsInclude<ExtArgs> | null
  }


  /**
   * Model WishlistItem
   */

  export type AggregateWishlistItem = {
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  export type WishlistItemAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    priority: number | null
  }

  export type WishlistItemSumAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    priority: number | null
  }

  export type WishlistItemMinAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type WishlistItemMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type WishlistItemCountAggregateOutputType = {
    id: number
    userId: number
    lootId: number
    priority: number
    createdAt: number
    _all: number
  }


  export type WishlistItemAvgAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    priority?: true
  }

  export type WishlistItemSumAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    priority?: true
  }

  export type WishlistItemMinAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    priority?: true
    createdAt?: true
  }

  export type WishlistItemMaxAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    priority?: true
    createdAt?: true
  }

  export type WishlistItemCountAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type WishlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItem to aggregate.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WishlistItems
    **/
    _count?: true | WishlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistItemMaxAggregateInputType
  }

  export type GetWishlistItemAggregateType<T extends WishlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlistItem[P]>
      : GetScalarType<T[P], AggregateWishlistItem[P]>
  }




  export type WishlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithAggregationInput | WishlistItemOrderByWithAggregationInput[]
    by: WishlistItemScalarFieldEnum[] | WishlistItemScalarFieldEnum
    having?: WishlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistItemCountAggregateInputType | true
    _avg?: WishlistItemAvgAggregateInputType
    _sum?: WishlistItemSumAggregateInputType
    _min?: WishlistItemMinAggregateInputType
    _max?: WishlistItemMaxAggregateInputType
  }

  export type WishlistItemGroupByOutputType = {
    id: number
    userId: number
    lootId: number
    priority: number
    createdAt: Date
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  type GetWishlistItemGroupByPayload<T extends WishlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WishlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectScalar = {
    id?: boolean
    userId?: boolean
    lootId?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type WishlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lootId" | "priority" | "createdAt", ExtArgs["result"]["wishlistItem"]>
  export type WishlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }
  export type WishlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }
  export type WishlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
  }

  export type $WishlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WishlistItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loot: Prisma.$LootPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      lootId: number
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["wishlistItem"]>
    composites: {}
  }

  type WishlistItemGetPayload<S extends boolean | null | undefined | WishlistItemDefaultArgs> = $Result.GetResult<Prisma.$WishlistItemPayload, S>

  type WishlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistItemCountAggregateInputType | true
    }

  export interface WishlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WishlistItem'], meta: { name: 'WishlistItem' } }
    /**
     * Find zero or one WishlistItem that matches the filter.
     * @param {WishlistItemFindUniqueArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistItemFindUniqueArgs>(args: SelectSubset<T, WishlistItemFindUniqueArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WishlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistItemFindUniqueOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistItemFindFirstArgs>(args?: SelectSubset<T, WishlistItemFindFirstArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WishlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany()
     * 
     * // Get first 10 WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistItemFindManyArgs>(args?: SelectSubset<T, WishlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WishlistItem.
     * @param {WishlistItemCreateArgs} args - Arguments to create a WishlistItem.
     * @example
     * // Create one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.create({
     *   data: {
     *     // ... data to create a WishlistItem
     *   }
     * })
     * 
     */
    create<T extends WishlistItemCreateArgs>(args: SelectSubset<T, WishlistItemCreateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WishlistItems.
     * @param {WishlistItemCreateManyArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistItemCreateManyArgs>(args?: SelectSubset<T, WishlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WishlistItems and returns the data saved in the database.
     * @param {WishlistItemCreateManyAndReturnArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WishlistItem.
     * @param {WishlistItemDeleteArgs} args - Arguments to delete one WishlistItem.
     * @example
     * // Delete one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.delete({
     *   where: {
     *     // ... filter to delete one WishlistItem
     *   }
     * })
     * 
     */
    delete<T extends WishlistItemDeleteArgs>(args: SelectSubset<T, WishlistItemDeleteArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WishlistItem.
     * @param {WishlistItemUpdateArgs} args - Arguments to update one WishlistItem.
     * @example
     * // Update one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistItemUpdateArgs>(args: SelectSubset<T, WishlistItemUpdateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WishlistItems.
     * @param {WishlistItemDeleteManyArgs} args - Arguments to filter WishlistItems to delete.
     * @example
     * // Delete a few WishlistItems
     * const { count } = await prisma.wishlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistItemDeleteManyArgs>(args?: SelectSubset<T, WishlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistItemUpdateManyArgs>(args: SelectSubset<T, WishlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems and returns the data updated in the database.
     * @param {WishlistItemUpdateManyAndReturnArgs} args - Arguments to update many WishlistItems.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WishlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WishlistItem.
     * @param {WishlistItemUpsertArgs} args - Arguments to update or create a WishlistItem.
     * @example
     * // Update or create a WishlistItem
     * const wishlistItem = await prisma.wishlistItem.upsert({
     *   create: {
     *     // ... data to create a WishlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WishlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WishlistItemUpsertArgs>(args: SelectSubset<T, WishlistItemUpsertArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemCountArgs} args - Arguments to filter WishlistItems to count.
     * @example
     * // Count the number of WishlistItems
     * const count = await prisma.wishlistItem.count({
     *   where: {
     *     // ... the filter for the WishlistItems we want to count
     *   }
     * })
    **/
    count<T extends WishlistItemCountArgs>(
      args?: Subset<T, WishlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistItemAggregateArgs>(args: Subset<T, WishlistItemAggregateArgs>): Prisma.PrismaPromise<GetWishlistItemAggregateType<T>>

    /**
     * Group by WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WishlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WishlistItem model
   */
  readonly fields: WishlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WishlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loot<T extends LootDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LootDefaultArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WishlistItem model
   */
  interface WishlistItemFieldRefs {
    readonly id: FieldRef<"WishlistItem", 'Int'>
    readonly userId: FieldRef<"WishlistItem", 'Int'>
    readonly lootId: FieldRef<"WishlistItem", 'Int'>
    readonly priority: FieldRef<"WishlistItem", 'Int'>
    readonly createdAt: FieldRef<"WishlistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WishlistItem findUnique
   */
  export type WishlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findUniqueOrThrow
   */
  export type WishlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findFirst
   */
  export type WishlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findFirstOrThrow
   */
  export type WishlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findMany
   */
  export type WishlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItems to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem create
   */
  export type WishlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WishlistItem.
     */
    data: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
  }

  /**
   * WishlistItem createMany
   */
  export type WishlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WishlistItem createManyAndReturn
   */
  export type WishlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem update
   */
  export type WishlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WishlistItem.
     */
    data: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
    /**
     * Choose, which WishlistItem to update.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem updateMany
   */
  export type WishlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
  }

  /**
   * WishlistItem updateManyAndReturn
   */
  export type WishlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem upsert
   */
  export type WishlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WishlistItem to update in case it exists.
     */
    where: WishlistItemWhereUniqueInput
    /**
     * In case the WishlistItem found by the `where` argument doesn't exist, create a new WishlistItem with this data.
     */
    create: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
    /**
     * In case the WishlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
  }

  /**
   * WishlistItem delete
   */
  export type WishlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter which WishlistItem to delete.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem deleteMany
   */
  export type WishlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItems to delete
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to delete.
     */
    limit?: number
  }

  /**
   * WishlistItem without action
   */
  export type WishlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
  }


  /**
   * Model LootHistory
   */

  export type AggregateLootHistory = {
    _count: LootHistoryCountAggregateOutputType | null
    _avg: LootHistoryAvgAggregateOutputType | null
    _sum: LootHistorySumAggregateOutputType | null
    _min: LootHistoryMinAggregateOutputType | null
    _max: LootHistoryMaxAggregateOutputType | null
  }

  export type LootHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    raidId: number | null
    priority: number | null
    pointsCost: number | null
  }

  export type LootHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    raidId: number | null
    priority: number | null
    pointsCost: number | null
  }

  export type LootHistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    raidId: number | null
    priority: number | null
    pointsCost: number | null
    createdAt: Date | null
  }

  export type LootHistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    lootId: number | null
    raidId: number | null
    priority: number | null
    pointsCost: number | null
    createdAt: Date | null
  }

  export type LootHistoryCountAggregateOutputType = {
    id: number
    userId: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt: number
    _all: number
  }


  export type LootHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    raidId?: true
    priority?: true
    pointsCost?: true
  }

  export type LootHistorySumAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    raidId?: true
    priority?: true
    pointsCost?: true
  }

  export type LootHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    raidId?: true
    priority?: true
    pointsCost?: true
    createdAt?: true
  }

  export type LootHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    raidId?: true
    priority?: true
    pointsCost?: true
    createdAt?: true
  }

  export type LootHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    lootId?: true
    raidId?: true
    priority?: true
    pointsCost?: true
    createdAt?: true
    _all?: true
  }

  export type LootHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LootHistory to aggregate.
     */
    where?: LootHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LootHistories to fetch.
     */
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LootHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LootHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LootHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LootHistories
    **/
    _count?: true | LootHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LootHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LootHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LootHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LootHistoryMaxAggregateInputType
  }

  export type GetLootHistoryAggregateType<T extends LootHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLootHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLootHistory[P]>
      : GetScalarType<T[P], AggregateLootHistory[P]>
  }




  export type LootHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootHistoryWhereInput
    orderBy?: LootHistoryOrderByWithAggregationInput | LootHistoryOrderByWithAggregationInput[]
    by: LootHistoryScalarFieldEnum[] | LootHistoryScalarFieldEnum
    having?: LootHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LootHistoryCountAggregateInputType | true
    _avg?: LootHistoryAvgAggregateInputType
    _sum?: LootHistorySumAggregateInputType
    _min?: LootHistoryMinAggregateInputType
    _max?: LootHistoryMaxAggregateInputType
  }

  export type LootHistoryGroupByOutputType = {
    id: number
    userId: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt: Date
    _count: LootHistoryCountAggregateOutputType | null
    _avg: LootHistoryAvgAggregateOutputType | null
    _sum: LootHistorySumAggregateOutputType | null
    _min: LootHistoryMinAggregateOutputType | null
    _max: LootHistoryMaxAggregateOutputType | null
  }

  type GetLootHistoryGroupByPayload<T extends LootHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LootHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LootHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LootHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LootHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LootHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    raidId?: boolean
    priority?: boolean
    pointsCost?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lootHistory"]>

  export type LootHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    raidId?: boolean
    priority?: boolean
    pointsCost?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lootHistory"]>

  export type LootHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lootId?: boolean
    raidId?: boolean
    priority?: boolean
    pointsCost?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lootHistory"]>

  export type LootHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    lootId?: boolean
    raidId?: boolean
    priority?: boolean
    pointsCost?: boolean
    createdAt?: boolean
  }

  export type LootHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lootId" | "raidId" | "priority" | "pointsCost" | "createdAt", ExtArgs["result"]["lootHistory"]>
  export type LootHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type LootHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type LootHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loot?: boolean | LootDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }

  export type $LootHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LootHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loot: Prisma.$LootPayload<ExtArgs>
      raid: Prisma.$RaidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      lootId: number
      raidId: number
      priority: number
      pointsCost: number
      createdAt: Date
    }, ExtArgs["result"]["lootHistory"]>
    composites: {}
  }

  type LootHistoryGetPayload<S extends boolean | null | undefined | LootHistoryDefaultArgs> = $Result.GetResult<Prisma.$LootHistoryPayload, S>

  type LootHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LootHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LootHistoryCountAggregateInputType | true
    }

  export interface LootHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LootHistory'], meta: { name: 'LootHistory' } }
    /**
     * Find zero or one LootHistory that matches the filter.
     * @param {LootHistoryFindUniqueArgs} args - Arguments to find a LootHistory
     * @example
     * // Get one LootHistory
     * const lootHistory = await prisma.lootHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LootHistoryFindUniqueArgs>(args: SelectSubset<T, LootHistoryFindUniqueArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LootHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LootHistoryFindUniqueOrThrowArgs} args - Arguments to find a LootHistory
     * @example
     * // Get one LootHistory
     * const lootHistory = await prisma.lootHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LootHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LootHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LootHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryFindFirstArgs} args - Arguments to find a LootHistory
     * @example
     * // Get one LootHistory
     * const lootHistory = await prisma.lootHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LootHistoryFindFirstArgs>(args?: SelectSubset<T, LootHistoryFindFirstArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LootHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryFindFirstOrThrowArgs} args - Arguments to find a LootHistory
     * @example
     * // Get one LootHistory
     * const lootHistory = await prisma.lootHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LootHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LootHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LootHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LootHistories
     * const lootHistories = await prisma.lootHistory.findMany()
     * 
     * // Get first 10 LootHistories
     * const lootHistories = await prisma.lootHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lootHistoryWithIdOnly = await prisma.lootHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LootHistoryFindManyArgs>(args?: SelectSubset<T, LootHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LootHistory.
     * @param {LootHistoryCreateArgs} args - Arguments to create a LootHistory.
     * @example
     * // Create one LootHistory
     * const LootHistory = await prisma.lootHistory.create({
     *   data: {
     *     // ... data to create a LootHistory
     *   }
     * })
     * 
     */
    create<T extends LootHistoryCreateArgs>(args: SelectSubset<T, LootHistoryCreateArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LootHistories.
     * @param {LootHistoryCreateManyArgs} args - Arguments to create many LootHistories.
     * @example
     * // Create many LootHistories
     * const lootHistory = await prisma.lootHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LootHistoryCreateManyArgs>(args?: SelectSubset<T, LootHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LootHistories and returns the data saved in the database.
     * @param {LootHistoryCreateManyAndReturnArgs} args - Arguments to create many LootHistories.
     * @example
     * // Create many LootHistories
     * const lootHistory = await prisma.lootHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LootHistories and only return the `id`
     * const lootHistoryWithIdOnly = await prisma.lootHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LootHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LootHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LootHistory.
     * @param {LootHistoryDeleteArgs} args - Arguments to delete one LootHistory.
     * @example
     * // Delete one LootHistory
     * const LootHistory = await prisma.lootHistory.delete({
     *   where: {
     *     // ... filter to delete one LootHistory
     *   }
     * })
     * 
     */
    delete<T extends LootHistoryDeleteArgs>(args: SelectSubset<T, LootHistoryDeleteArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LootHistory.
     * @param {LootHistoryUpdateArgs} args - Arguments to update one LootHistory.
     * @example
     * // Update one LootHistory
     * const lootHistory = await prisma.lootHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LootHistoryUpdateArgs>(args: SelectSubset<T, LootHistoryUpdateArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LootHistories.
     * @param {LootHistoryDeleteManyArgs} args - Arguments to filter LootHistories to delete.
     * @example
     * // Delete a few LootHistories
     * const { count } = await prisma.lootHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LootHistoryDeleteManyArgs>(args?: SelectSubset<T, LootHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LootHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LootHistories
     * const lootHistory = await prisma.lootHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LootHistoryUpdateManyArgs>(args: SelectSubset<T, LootHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LootHistories and returns the data updated in the database.
     * @param {LootHistoryUpdateManyAndReturnArgs} args - Arguments to update many LootHistories.
     * @example
     * // Update many LootHistories
     * const lootHistory = await prisma.lootHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LootHistories and only return the `id`
     * const lootHistoryWithIdOnly = await prisma.lootHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LootHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LootHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LootHistory.
     * @param {LootHistoryUpsertArgs} args - Arguments to update or create a LootHistory.
     * @example
     * // Update or create a LootHistory
     * const lootHistory = await prisma.lootHistory.upsert({
     *   create: {
     *     // ... data to create a LootHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LootHistory we want to update
     *   }
     * })
     */
    upsert<T extends LootHistoryUpsertArgs>(args: SelectSubset<T, LootHistoryUpsertArgs<ExtArgs>>): Prisma__LootHistoryClient<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LootHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryCountArgs} args - Arguments to filter LootHistories to count.
     * @example
     * // Count the number of LootHistories
     * const count = await prisma.lootHistory.count({
     *   where: {
     *     // ... the filter for the LootHistories we want to count
     *   }
     * })
    **/
    count<T extends LootHistoryCountArgs>(
      args?: Subset<T, LootHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LootHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LootHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LootHistoryAggregateArgs>(args: Subset<T, LootHistoryAggregateArgs>): Prisma.PrismaPromise<GetLootHistoryAggregateType<T>>

    /**
     * Group by LootHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LootHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LootHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LootHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LootHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLootHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LootHistory model
   */
  readonly fields: LootHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LootHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LootHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loot<T extends LootDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LootDefaultArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raid<T extends RaidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaidDefaultArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LootHistory model
   */
  interface LootHistoryFieldRefs {
    readonly id: FieldRef<"LootHistory", 'Int'>
    readonly userId: FieldRef<"LootHistory", 'Int'>
    readonly lootId: FieldRef<"LootHistory", 'Int'>
    readonly raidId: FieldRef<"LootHistory", 'Int'>
    readonly priority: FieldRef<"LootHistory", 'Int'>
    readonly pointsCost: FieldRef<"LootHistory", 'Int'>
    readonly createdAt: FieldRef<"LootHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LootHistory findUnique
   */
  export type LootHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LootHistory to fetch.
     */
    where: LootHistoryWhereUniqueInput
  }

  /**
   * LootHistory findUniqueOrThrow
   */
  export type LootHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LootHistory to fetch.
     */
    where: LootHistoryWhereUniqueInput
  }

  /**
   * LootHistory findFirst
   */
  export type LootHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LootHistory to fetch.
     */
    where?: LootHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LootHistories to fetch.
     */
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LootHistories.
     */
    cursor?: LootHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LootHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LootHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LootHistories.
     */
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * LootHistory findFirstOrThrow
   */
  export type LootHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LootHistory to fetch.
     */
    where?: LootHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LootHistories to fetch.
     */
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LootHistories.
     */
    cursor?: LootHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LootHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LootHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LootHistories.
     */
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * LootHistory findMany
   */
  export type LootHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LootHistories to fetch.
     */
    where?: LootHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LootHistories to fetch.
     */
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LootHistories.
     */
    cursor?: LootHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LootHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LootHistories.
     */
    skip?: number
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * LootHistory create
   */
  export type LootHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LootHistory.
     */
    data: XOR<LootHistoryCreateInput, LootHistoryUncheckedCreateInput>
  }

  /**
   * LootHistory createMany
   */
  export type LootHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LootHistories.
     */
    data: LootHistoryCreateManyInput | LootHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LootHistory createManyAndReturn
   */
  export type LootHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LootHistories.
     */
    data: LootHistoryCreateManyInput | LootHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LootHistory update
   */
  export type LootHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LootHistory.
     */
    data: XOR<LootHistoryUpdateInput, LootHistoryUncheckedUpdateInput>
    /**
     * Choose, which LootHistory to update.
     */
    where: LootHistoryWhereUniqueInput
  }

  /**
   * LootHistory updateMany
   */
  export type LootHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LootHistories.
     */
    data: XOR<LootHistoryUpdateManyMutationInput, LootHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LootHistories to update
     */
    where?: LootHistoryWhereInput
    /**
     * Limit how many LootHistories to update.
     */
    limit?: number
  }

  /**
   * LootHistory updateManyAndReturn
   */
  export type LootHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LootHistories.
     */
    data: XOR<LootHistoryUpdateManyMutationInput, LootHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LootHistories to update
     */
    where?: LootHistoryWhereInput
    /**
     * Limit how many LootHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LootHistory upsert
   */
  export type LootHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LootHistory to update in case it exists.
     */
    where: LootHistoryWhereUniqueInput
    /**
     * In case the LootHistory found by the `where` argument doesn't exist, create a new LootHistory with this data.
     */
    create: XOR<LootHistoryCreateInput, LootHistoryUncheckedCreateInput>
    /**
     * In case the LootHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LootHistoryUpdateInput, LootHistoryUncheckedUpdateInput>
  }

  /**
   * LootHistory delete
   */
  export type LootHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    /**
     * Filter which LootHistory to delete.
     */
    where: LootHistoryWhereUniqueInput
  }

  /**
   * LootHistory deleteMany
   */
  export type LootHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LootHistories to delete
     */
    where?: LootHistoryWhereInput
    /**
     * Limit how many LootHistories to delete.
     */
    limit?: number
  }

  /**
   * LootHistory without action
   */
  export type LootHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
  }


  /**
   * Model RaidAttendance
   */

  export type AggregateRaidAttendance = {
    _count: RaidAttendanceCountAggregateOutputType | null
    _avg: RaidAttendanceAvgAggregateOutputType | null
    _sum: RaidAttendanceSumAggregateOutputType | null
    _min: RaidAttendanceMinAggregateOutputType | null
    _max: RaidAttendanceMaxAggregateOutputType | null
  }

  export type RaidAttendanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    pointsGiven: number | null
  }

  export type RaidAttendanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    pointsGiven: number | null
  }

  export type RaidAttendanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    pointsGiven: number | null
    createdAt: Date | null
  }

  export type RaidAttendanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    raidId: number | null
    pointsGiven: number | null
    createdAt: Date | null
  }

  export type RaidAttendanceCountAggregateOutputType = {
    id: number
    userId: number
    raidId: number
    pointsGiven: number
    createdAt: number
    _all: number
  }


  export type RaidAttendanceAvgAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    pointsGiven?: true
  }

  export type RaidAttendanceSumAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    pointsGiven?: true
  }

  export type RaidAttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    pointsGiven?: true
    createdAt?: true
  }

  export type RaidAttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    pointsGiven?: true
    createdAt?: true
  }

  export type RaidAttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    raidId?: true
    pointsGiven?: true
    createdAt?: true
    _all?: true
  }

  export type RaidAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidAttendance to aggregate.
     */
    where?: RaidAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidAttendances to fetch.
     */
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaidAttendances
    **/
    _count?: true | RaidAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaidAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaidAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidAttendanceMaxAggregateInputType
  }

  export type GetRaidAttendanceAggregateType<T extends RaidAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateRaidAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaidAttendance[P]>
      : GetScalarType<T[P], AggregateRaidAttendance[P]>
  }




  export type RaidAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidAttendanceWhereInput
    orderBy?: RaidAttendanceOrderByWithAggregationInput | RaidAttendanceOrderByWithAggregationInput[]
    by: RaidAttendanceScalarFieldEnum[] | RaidAttendanceScalarFieldEnum
    having?: RaidAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidAttendanceCountAggregateInputType | true
    _avg?: RaidAttendanceAvgAggregateInputType
    _sum?: RaidAttendanceSumAggregateInputType
    _min?: RaidAttendanceMinAggregateInputType
    _max?: RaidAttendanceMaxAggregateInputType
  }

  export type RaidAttendanceGroupByOutputType = {
    id: number
    userId: number
    raidId: number
    pointsGiven: number
    createdAt: Date
    _count: RaidAttendanceCountAggregateOutputType | null
    _avg: RaidAttendanceAvgAggregateOutputType | null
    _sum: RaidAttendanceSumAggregateOutputType | null
    _min: RaidAttendanceMinAggregateOutputType | null
    _max: RaidAttendanceMaxAggregateOutputType | null
  }

  type GetRaidAttendanceGroupByPayload<T extends RaidAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], RaidAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type RaidAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    pointsGiven?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidAttendance"]>

  export type RaidAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    pointsGiven?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidAttendance"]>

  export type RaidAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raidId?: boolean
    pointsGiven?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidAttendance"]>

  export type RaidAttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    raidId?: boolean
    pointsGiven?: boolean
    createdAt?: boolean
  }

  export type RaidAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "raidId" | "pointsGiven" | "createdAt", ExtArgs["result"]["raidAttendance"]>
  export type RaidAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type RaidAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }
  export type RaidAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    raid?: boolean | RaidDefaultArgs<ExtArgs>
  }

  export type $RaidAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaidAttendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      raid: Prisma.$RaidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      raidId: number
      pointsGiven: number
      createdAt: Date
    }, ExtArgs["result"]["raidAttendance"]>
    composites: {}
  }

  type RaidAttendanceGetPayload<S extends boolean | null | undefined | RaidAttendanceDefaultArgs> = $Result.GetResult<Prisma.$RaidAttendancePayload, S>

  type RaidAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaidAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaidAttendanceCountAggregateInputType | true
    }

  export interface RaidAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaidAttendance'], meta: { name: 'RaidAttendance' } }
    /**
     * Find zero or one RaidAttendance that matches the filter.
     * @param {RaidAttendanceFindUniqueArgs} args - Arguments to find a RaidAttendance
     * @example
     * // Get one RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidAttendanceFindUniqueArgs>(args: SelectSubset<T, RaidAttendanceFindUniqueArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaidAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaidAttendanceFindUniqueOrThrowArgs} args - Arguments to find a RaidAttendance
     * @example
     * // Get one RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaidAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceFindFirstArgs} args - Arguments to find a RaidAttendance
     * @example
     * // Get one RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidAttendanceFindFirstArgs>(args?: SelectSubset<T, RaidAttendanceFindFirstArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaidAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceFindFirstOrThrowArgs} args - Arguments to find a RaidAttendance
     * @example
     * // Get one RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaidAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaidAttendances
     * const raidAttendances = await prisma.raidAttendance.findMany()
     * 
     * // Get first 10 RaidAttendances
     * const raidAttendances = await prisma.raidAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidAttendanceWithIdOnly = await prisma.raidAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidAttendanceFindManyArgs>(args?: SelectSubset<T, RaidAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaidAttendance.
     * @param {RaidAttendanceCreateArgs} args - Arguments to create a RaidAttendance.
     * @example
     * // Create one RaidAttendance
     * const RaidAttendance = await prisma.raidAttendance.create({
     *   data: {
     *     // ... data to create a RaidAttendance
     *   }
     * })
     * 
     */
    create<T extends RaidAttendanceCreateArgs>(args: SelectSubset<T, RaidAttendanceCreateArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaidAttendances.
     * @param {RaidAttendanceCreateManyArgs} args - Arguments to create many RaidAttendances.
     * @example
     * // Create many RaidAttendances
     * const raidAttendance = await prisma.raidAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidAttendanceCreateManyArgs>(args?: SelectSubset<T, RaidAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaidAttendances and returns the data saved in the database.
     * @param {RaidAttendanceCreateManyAndReturnArgs} args - Arguments to create many RaidAttendances.
     * @example
     * // Create many RaidAttendances
     * const raidAttendance = await prisma.raidAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaidAttendances and only return the `id`
     * const raidAttendanceWithIdOnly = await prisma.raidAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaidAttendance.
     * @param {RaidAttendanceDeleteArgs} args - Arguments to delete one RaidAttendance.
     * @example
     * // Delete one RaidAttendance
     * const RaidAttendance = await prisma.raidAttendance.delete({
     *   where: {
     *     // ... filter to delete one RaidAttendance
     *   }
     * })
     * 
     */
    delete<T extends RaidAttendanceDeleteArgs>(args: SelectSubset<T, RaidAttendanceDeleteArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaidAttendance.
     * @param {RaidAttendanceUpdateArgs} args - Arguments to update one RaidAttendance.
     * @example
     * // Update one RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidAttendanceUpdateArgs>(args: SelectSubset<T, RaidAttendanceUpdateArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaidAttendances.
     * @param {RaidAttendanceDeleteManyArgs} args - Arguments to filter RaidAttendances to delete.
     * @example
     * // Delete a few RaidAttendances
     * const { count } = await prisma.raidAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidAttendanceDeleteManyArgs>(args?: SelectSubset<T, RaidAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaidAttendances
     * const raidAttendance = await prisma.raidAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidAttendanceUpdateManyArgs>(args: SelectSubset<T, RaidAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidAttendances and returns the data updated in the database.
     * @param {RaidAttendanceUpdateManyAndReturnArgs} args - Arguments to update many RaidAttendances.
     * @example
     * // Update many RaidAttendances
     * const raidAttendance = await prisma.raidAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaidAttendances and only return the `id`
     * const raidAttendanceWithIdOnly = await prisma.raidAttendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaidAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaidAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaidAttendance.
     * @param {RaidAttendanceUpsertArgs} args - Arguments to update or create a RaidAttendance.
     * @example
     * // Update or create a RaidAttendance
     * const raidAttendance = await prisma.raidAttendance.upsert({
     *   create: {
     *     // ... data to create a RaidAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaidAttendance we want to update
     *   }
     * })
     */
    upsert<T extends RaidAttendanceUpsertArgs>(args: SelectSubset<T, RaidAttendanceUpsertArgs<ExtArgs>>): Prisma__RaidAttendanceClient<$Result.GetResult<Prisma.$RaidAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaidAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceCountArgs} args - Arguments to filter RaidAttendances to count.
     * @example
     * // Count the number of RaidAttendances
     * const count = await prisma.raidAttendance.count({
     *   where: {
     *     // ... the filter for the RaidAttendances we want to count
     *   }
     * })
    **/
    count<T extends RaidAttendanceCountArgs>(
      args?: Subset<T, RaidAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaidAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidAttendanceAggregateArgs>(args: Subset<T, RaidAttendanceAggregateArgs>): Prisma.PrismaPromise<GetRaidAttendanceAggregateType<T>>

    /**
     * Group by RaidAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: RaidAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaidAttendance model
   */
  readonly fields: RaidAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaidAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raid<T extends RaidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaidDefaultArgs<ExtArgs>>): Prisma__RaidClient<$Result.GetResult<Prisma.$RaidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaidAttendance model
   */
  interface RaidAttendanceFieldRefs {
    readonly id: FieldRef<"RaidAttendance", 'Int'>
    readonly userId: FieldRef<"RaidAttendance", 'Int'>
    readonly raidId: FieldRef<"RaidAttendance", 'Int'>
    readonly pointsGiven: FieldRef<"RaidAttendance", 'Int'>
    readonly createdAt: FieldRef<"RaidAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaidAttendance findUnique
   */
  export type RaidAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which RaidAttendance to fetch.
     */
    where: RaidAttendanceWhereUniqueInput
  }

  /**
   * RaidAttendance findUniqueOrThrow
   */
  export type RaidAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which RaidAttendance to fetch.
     */
    where: RaidAttendanceWhereUniqueInput
  }

  /**
   * RaidAttendance findFirst
   */
  export type RaidAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which RaidAttendance to fetch.
     */
    where?: RaidAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidAttendances to fetch.
     */
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidAttendances.
     */
    cursor?: RaidAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidAttendances.
     */
    distinct?: RaidAttendanceScalarFieldEnum | RaidAttendanceScalarFieldEnum[]
  }

  /**
   * RaidAttendance findFirstOrThrow
   */
  export type RaidAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which RaidAttendance to fetch.
     */
    where?: RaidAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidAttendances to fetch.
     */
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidAttendances.
     */
    cursor?: RaidAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidAttendances.
     */
    distinct?: RaidAttendanceScalarFieldEnum | RaidAttendanceScalarFieldEnum[]
  }

  /**
   * RaidAttendance findMany
   */
  export type RaidAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which RaidAttendances to fetch.
     */
    where?: RaidAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidAttendances to fetch.
     */
    orderBy?: RaidAttendanceOrderByWithRelationInput | RaidAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaidAttendances.
     */
    cursor?: RaidAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidAttendances.
     */
    skip?: number
    distinct?: RaidAttendanceScalarFieldEnum | RaidAttendanceScalarFieldEnum[]
  }

  /**
   * RaidAttendance create
   */
  export type RaidAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a RaidAttendance.
     */
    data: XOR<RaidAttendanceCreateInput, RaidAttendanceUncheckedCreateInput>
  }

  /**
   * RaidAttendance createMany
   */
  export type RaidAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaidAttendances.
     */
    data: RaidAttendanceCreateManyInput | RaidAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaidAttendance createManyAndReturn
   */
  export type RaidAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many RaidAttendances.
     */
    data: RaidAttendanceCreateManyInput | RaidAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidAttendance update
   */
  export type RaidAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a RaidAttendance.
     */
    data: XOR<RaidAttendanceUpdateInput, RaidAttendanceUncheckedUpdateInput>
    /**
     * Choose, which RaidAttendance to update.
     */
    where: RaidAttendanceWhereUniqueInput
  }

  /**
   * RaidAttendance updateMany
   */
  export type RaidAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaidAttendances.
     */
    data: XOR<RaidAttendanceUpdateManyMutationInput, RaidAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which RaidAttendances to update
     */
    where?: RaidAttendanceWhereInput
    /**
     * Limit how many RaidAttendances to update.
     */
    limit?: number
  }

  /**
   * RaidAttendance updateManyAndReturn
   */
  export type RaidAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update RaidAttendances.
     */
    data: XOR<RaidAttendanceUpdateManyMutationInput, RaidAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which RaidAttendances to update
     */
    where?: RaidAttendanceWhereInput
    /**
     * Limit how many RaidAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidAttendance upsert
   */
  export type RaidAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the RaidAttendance to update in case it exists.
     */
    where: RaidAttendanceWhereUniqueInput
    /**
     * In case the RaidAttendance found by the `where` argument doesn't exist, create a new RaidAttendance with this data.
     */
    create: XOR<RaidAttendanceCreateInput, RaidAttendanceUncheckedCreateInput>
    /**
     * In case the RaidAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidAttendanceUpdateInput, RaidAttendanceUncheckedUpdateInput>
  }

  /**
   * RaidAttendance delete
   */
  export type RaidAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
    /**
     * Filter which RaidAttendance to delete.
     */
    where: RaidAttendanceWhereUniqueInput
  }

  /**
   * RaidAttendance deleteMany
   */
  export type RaidAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidAttendances to delete
     */
    where?: RaidAttendanceWhereInput
    /**
     * Limit how many RaidAttendances to delete.
     */
    limit?: number
  }

  /**
   * RaidAttendance without action
   */
  export type RaidAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidAttendance
     */
    select?: RaidAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaidAttendance
     */
    omit?: RaidAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Boss
   */

  export type AggregateBoss = {
    _count: BossCountAggregateOutputType | null
    _avg: BossAvgAggregateOutputType | null
    _sum: BossSumAggregateOutputType | null
    _min: BossMinAggregateOutputType | null
    _max: BossMaxAggregateOutputType | null
  }

  export type BossAvgAggregateOutputType = {
    id: number | null
  }

  export type BossSumAggregateOutputType = {
    id: number | null
  }

  export type BossMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BossMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BossCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BossAvgAggregateInputType = {
    id?: true
  }

  export type BossSumAggregateInputType = {
    id?: true
  }

  export type BossMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BossMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BossCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BossAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boss to aggregate.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bosses
    **/
    _count?: true | BossCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BossAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BossSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BossMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BossMaxAggregateInputType
  }

  export type GetBossAggregateType<T extends BossAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss[P]>
      : GetScalarType<T[P], AggregateBoss[P]>
  }




  export type BossGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BossWhereInput
    orderBy?: BossOrderByWithAggregationInput | BossOrderByWithAggregationInput[]
    by: BossScalarFieldEnum[] | BossScalarFieldEnum
    having?: BossScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BossCountAggregateInputType | true
    _avg?: BossAvgAggregateInputType
    _sum?: BossSumAggregateInputType
    _min?: BossMinAggregateInputType
    _max?: BossMaxAggregateInputType
  }

  export type BossGroupByOutputType = {
    id: number
    name: string
    _count: BossCountAggregateOutputType | null
    _avg: BossAvgAggregateOutputType | null
    _sum: BossSumAggregateOutputType | null
    _min: BossMinAggregateOutputType | null
    _max: BossMaxAggregateOutputType | null
  }

  type GetBossGroupByPayload<T extends BossGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BossGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BossGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BossGroupByOutputType[P]>
            : GetScalarType<T[P], BossGroupByOutputType[P]>
        }
      >
    >


  export type BossSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    loots?: boolean | Boss$lootsArgs<ExtArgs>
    _count?: boolean | BossCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boss"]>

  export type BossSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["boss"]>

  export type BossSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["boss"]>

  export type BossSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BossOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["boss"]>
  export type BossInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loots?: boolean | Boss$lootsArgs<ExtArgs>
    _count?: boolean | BossCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BossIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BossIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BossPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boss"
    objects: {
      loots: Prisma.$LootPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["boss"]>
    composites: {}
  }

  type BossGetPayload<S extends boolean | null | undefined | BossDefaultArgs> = $Result.GetResult<Prisma.$BossPayload, S>

  type BossCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BossFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BossCountAggregateInputType | true
    }

  export interface BossDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boss'], meta: { name: 'Boss' } }
    /**
     * Find zero or one Boss that matches the filter.
     * @param {BossFindUniqueArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BossFindUniqueArgs>(args: SelectSubset<T, BossFindUniqueArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boss that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BossFindUniqueOrThrowArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BossFindUniqueOrThrowArgs>(args: SelectSubset<T, BossFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindFirstArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BossFindFirstArgs>(args?: SelectSubset<T, BossFindFirstArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boss that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindFirstOrThrowArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BossFindFirstOrThrowArgs>(args?: SelectSubset<T, BossFindFirstOrThrowArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bosses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bosses
     * const bosses = await prisma.boss.findMany()
     * 
     * // Get first 10 Bosses
     * const bosses = await prisma.boss.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bossWithIdOnly = await prisma.boss.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BossFindManyArgs>(args?: SelectSubset<T, BossFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boss.
     * @param {BossCreateArgs} args - Arguments to create a Boss.
     * @example
     * // Create one Boss
     * const Boss = await prisma.boss.create({
     *   data: {
     *     // ... data to create a Boss
     *   }
     * })
     * 
     */
    create<T extends BossCreateArgs>(args: SelectSubset<T, BossCreateArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bosses.
     * @param {BossCreateManyArgs} args - Arguments to create many Bosses.
     * @example
     * // Create many Bosses
     * const boss = await prisma.boss.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BossCreateManyArgs>(args?: SelectSubset<T, BossCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bosses and returns the data saved in the database.
     * @param {BossCreateManyAndReturnArgs} args - Arguments to create many Bosses.
     * @example
     * // Create many Bosses
     * const boss = await prisma.boss.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bosses and only return the `id`
     * const bossWithIdOnly = await prisma.boss.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BossCreateManyAndReturnArgs>(args?: SelectSubset<T, BossCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boss.
     * @param {BossDeleteArgs} args - Arguments to delete one Boss.
     * @example
     * // Delete one Boss
     * const Boss = await prisma.boss.delete({
     *   where: {
     *     // ... filter to delete one Boss
     *   }
     * })
     * 
     */
    delete<T extends BossDeleteArgs>(args: SelectSubset<T, BossDeleteArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boss.
     * @param {BossUpdateArgs} args - Arguments to update one Boss.
     * @example
     * // Update one Boss
     * const boss = await prisma.boss.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BossUpdateArgs>(args: SelectSubset<T, BossUpdateArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bosses.
     * @param {BossDeleteManyArgs} args - Arguments to filter Bosses to delete.
     * @example
     * // Delete a few Bosses
     * const { count } = await prisma.boss.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BossDeleteManyArgs>(args?: SelectSubset<T, BossDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bosses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bosses
     * const boss = await prisma.boss.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BossUpdateManyArgs>(args: SelectSubset<T, BossUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bosses and returns the data updated in the database.
     * @param {BossUpdateManyAndReturnArgs} args - Arguments to update many Bosses.
     * @example
     * // Update many Bosses
     * const boss = await prisma.boss.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bosses and only return the `id`
     * const bossWithIdOnly = await prisma.boss.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BossUpdateManyAndReturnArgs>(args: SelectSubset<T, BossUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boss.
     * @param {BossUpsertArgs} args - Arguments to update or create a Boss.
     * @example
     * // Update or create a Boss
     * const boss = await prisma.boss.upsert({
     *   create: {
     *     // ... data to create a Boss
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss we want to update
     *   }
     * })
     */
    upsert<T extends BossUpsertArgs>(args: SelectSubset<T, BossUpsertArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bosses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossCountArgs} args - Arguments to filter Bosses to count.
     * @example
     * // Count the number of Bosses
     * const count = await prisma.boss.count({
     *   where: {
     *     // ... the filter for the Bosses we want to count
     *   }
     * })
    **/
    count<T extends BossCountArgs>(
      args?: Subset<T, BossCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BossCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BossAggregateArgs>(args: Subset<T, BossAggregateArgs>): Prisma.PrismaPromise<GetBossAggregateType<T>>

    /**
     * Group by Boss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BossGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BossGroupByArgs['orderBy'] }
        : { orderBy?: BossGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BossGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBossGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boss model
   */
  readonly fields: BossFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boss.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BossClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loots<T extends Boss$lootsArgs<ExtArgs> = {}>(args?: Subset<T, Boss$lootsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Boss model
   */
  interface BossFieldRefs {
    readonly id: FieldRef<"Boss", 'Int'>
    readonly name: FieldRef<"Boss", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Boss findUnique
   */
  export type BossFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss findUniqueOrThrow
   */
  export type BossFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss findFirst
   */
  export type BossFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bosses.
     */
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss findFirstOrThrow
   */
  export type BossFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bosses.
     */
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss findMany
   */
  export type BossFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Bosses to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss create
   */
  export type BossCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The data needed to create a Boss.
     */
    data: XOR<BossCreateInput, BossUncheckedCreateInput>
  }

  /**
   * Boss createMany
   */
  export type BossCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bosses.
     */
    data: BossCreateManyInput | BossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boss createManyAndReturn
   */
  export type BossCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * The data used to create many Bosses.
     */
    data: BossCreateManyInput | BossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boss update
   */
  export type BossUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The data needed to update a Boss.
     */
    data: XOR<BossUpdateInput, BossUncheckedUpdateInput>
    /**
     * Choose, which Boss to update.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss updateMany
   */
  export type BossUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bosses.
     */
    data: XOR<BossUpdateManyMutationInput, BossUncheckedUpdateManyInput>
    /**
     * Filter which Bosses to update
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to update.
     */
    limit?: number
  }

  /**
   * Boss updateManyAndReturn
   */
  export type BossUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * The data used to update Bosses.
     */
    data: XOR<BossUpdateManyMutationInput, BossUncheckedUpdateManyInput>
    /**
     * Filter which Bosses to update
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to update.
     */
    limit?: number
  }

  /**
   * Boss upsert
   */
  export type BossUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The filter to search for the Boss to update in case it exists.
     */
    where: BossWhereUniqueInput
    /**
     * In case the Boss found by the `where` argument doesn't exist, create a new Boss with this data.
     */
    create: XOR<BossCreateInput, BossUncheckedCreateInput>
    /**
     * In case the Boss was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BossUpdateInput, BossUncheckedUpdateInput>
  }

  /**
   * Boss delete
   */
  export type BossDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter which Boss to delete.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss deleteMany
   */
  export type BossDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bosses to delete
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to delete.
     */
    limit?: number
  }

  /**
   * Boss.loots
   */
  export type Boss$lootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    where?: LootWhereInput
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    cursor?: LootWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LootScalarFieldEnum | LootScalarFieldEnum[]
  }

  /**
   * Boss without action
   */
  export type BossDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
  }


  /**
   * Model Loot
   */

  export type AggregateLoot = {
    _count: LootCountAggregateOutputType | null
    _avg: LootAvgAggregateOutputType | null
    _sum: LootSumAggregateOutputType | null
    _min: LootMinAggregateOutputType | null
    _max: LootMaxAggregateOutputType | null
  }

  export type LootAvgAggregateOutputType = {
    id: number | null
    bossId: number | null
  }

  export type LootSumAggregateOutputType = {
    id: number | null
    bossId: number | null
  }

  export type LootMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    bossId: number | null
  }

  export type LootMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    bossId: number | null
  }

  export type LootCountAggregateOutputType = {
    id: number
    name: number
    url: number
    bossId: number
    _all: number
  }


  export type LootAvgAggregateInputType = {
    id?: true
    bossId?: true
  }

  export type LootSumAggregateInputType = {
    id?: true
    bossId?: true
  }

  export type LootMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    bossId?: true
  }

  export type LootMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    bossId?: true
  }

  export type LootCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    bossId?: true
    _all?: true
  }

  export type LootAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loot to aggregate.
     */
    where?: LootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loots to fetch.
     */
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loots
    **/
    _count?: true | LootCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LootAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LootSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LootMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LootMaxAggregateInputType
  }

  export type GetLootAggregateType<T extends LootAggregateArgs> = {
        [P in keyof T & keyof AggregateLoot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoot[P]>
      : GetScalarType<T[P], AggregateLoot[P]>
  }




  export type LootGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LootWhereInput
    orderBy?: LootOrderByWithAggregationInput | LootOrderByWithAggregationInput[]
    by: LootScalarFieldEnum[] | LootScalarFieldEnum
    having?: LootScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LootCountAggregateInputType | true
    _avg?: LootAvgAggregateInputType
    _sum?: LootSumAggregateInputType
    _min?: LootMinAggregateInputType
    _max?: LootMaxAggregateInputType
  }

  export type LootGroupByOutputType = {
    id: number
    name: string
    url: string
    bossId: number
    _count: LootCountAggregateOutputType | null
    _avg: LootAvgAggregateOutputType | null
    _sum: LootSumAggregateOutputType | null
    _min: LootMinAggregateOutputType | null
    _max: LootMaxAggregateOutputType | null
  }

  type GetLootGroupByPayload<T extends LootGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LootGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LootGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LootGroupByOutputType[P]>
            : GetScalarType<T[P], LootGroupByOutputType[P]>
        }
      >
    >


  export type LootSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    bossId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
    users?: boolean | Loot$usersArgs<ExtArgs>
    WishlistItem?: boolean | Loot$WishlistItemArgs<ExtArgs>
    LootHistory?: boolean | Loot$LootHistoryArgs<ExtArgs>
    _count?: boolean | LootCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loot"]>

  export type LootSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    bossId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loot"]>

  export type LootSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    bossId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loot"]>

  export type LootSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    bossId?: boolean
  }

  export type LootOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "bossId", ExtArgs["result"]["loot"]>
  export type LootInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
    users?: boolean | Loot$usersArgs<ExtArgs>
    WishlistItem?: boolean | Loot$WishlistItemArgs<ExtArgs>
    LootHistory?: boolean | Loot$LootHistoryArgs<ExtArgs>
    _count?: boolean | LootCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LootIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
  }
  export type LootIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
  }

  export type $LootPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loot"
    objects: {
      boss: Prisma.$BossPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      WishlistItem: Prisma.$WishlistItemPayload<ExtArgs>[]
      LootHistory: Prisma.$LootHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      bossId: number
    }, ExtArgs["result"]["loot"]>
    composites: {}
  }

  type LootGetPayload<S extends boolean | null | undefined | LootDefaultArgs> = $Result.GetResult<Prisma.$LootPayload, S>

  type LootCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LootFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LootCountAggregateInputType | true
    }

  export interface LootDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loot'], meta: { name: 'Loot' } }
    /**
     * Find zero or one Loot that matches the filter.
     * @param {LootFindUniqueArgs} args - Arguments to find a Loot
     * @example
     * // Get one Loot
     * const loot = await prisma.loot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LootFindUniqueArgs>(args: SelectSubset<T, LootFindUniqueArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LootFindUniqueOrThrowArgs} args - Arguments to find a Loot
     * @example
     * // Get one Loot
     * const loot = await prisma.loot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LootFindUniqueOrThrowArgs>(args: SelectSubset<T, LootFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootFindFirstArgs} args - Arguments to find a Loot
     * @example
     * // Get one Loot
     * const loot = await prisma.loot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LootFindFirstArgs>(args?: SelectSubset<T, LootFindFirstArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootFindFirstOrThrowArgs} args - Arguments to find a Loot
     * @example
     * // Get one Loot
     * const loot = await prisma.loot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LootFindFirstOrThrowArgs>(args?: SelectSubset<T, LootFindFirstOrThrowArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loots
     * const loots = await prisma.loot.findMany()
     * 
     * // Get first 10 Loots
     * const loots = await prisma.loot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lootWithIdOnly = await prisma.loot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LootFindManyArgs>(args?: SelectSubset<T, LootFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loot.
     * @param {LootCreateArgs} args - Arguments to create a Loot.
     * @example
     * // Create one Loot
     * const Loot = await prisma.loot.create({
     *   data: {
     *     // ... data to create a Loot
     *   }
     * })
     * 
     */
    create<T extends LootCreateArgs>(args: SelectSubset<T, LootCreateArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loots.
     * @param {LootCreateManyArgs} args - Arguments to create many Loots.
     * @example
     * // Create many Loots
     * const loot = await prisma.loot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LootCreateManyArgs>(args?: SelectSubset<T, LootCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loots and returns the data saved in the database.
     * @param {LootCreateManyAndReturnArgs} args - Arguments to create many Loots.
     * @example
     * // Create many Loots
     * const loot = await prisma.loot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loots and only return the `id`
     * const lootWithIdOnly = await prisma.loot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LootCreateManyAndReturnArgs>(args?: SelectSubset<T, LootCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loot.
     * @param {LootDeleteArgs} args - Arguments to delete one Loot.
     * @example
     * // Delete one Loot
     * const Loot = await prisma.loot.delete({
     *   where: {
     *     // ... filter to delete one Loot
     *   }
     * })
     * 
     */
    delete<T extends LootDeleteArgs>(args: SelectSubset<T, LootDeleteArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loot.
     * @param {LootUpdateArgs} args - Arguments to update one Loot.
     * @example
     * // Update one Loot
     * const loot = await prisma.loot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LootUpdateArgs>(args: SelectSubset<T, LootUpdateArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loots.
     * @param {LootDeleteManyArgs} args - Arguments to filter Loots to delete.
     * @example
     * // Delete a few Loots
     * const { count } = await prisma.loot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LootDeleteManyArgs>(args?: SelectSubset<T, LootDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loots
     * const loot = await prisma.loot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LootUpdateManyArgs>(args: SelectSubset<T, LootUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loots and returns the data updated in the database.
     * @param {LootUpdateManyAndReturnArgs} args - Arguments to update many Loots.
     * @example
     * // Update many Loots
     * const loot = await prisma.loot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loots and only return the `id`
     * const lootWithIdOnly = await prisma.loot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LootUpdateManyAndReturnArgs>(args: SelectSubset<T, LootUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loot.
     * @param {LootUpsertArgs} args - Arguments to update or create a Loot.
     * @example
     * // Update or create a Loot
     * const loot = await prisma.loot.upsert({
     *   create: {
     *     // ... data to create a Loot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loot we want to update
     *   }
     * })
     */
    upsert<T extends LootUpsertArgs>(args: SelectSubset<T, LootUpsertArgs<ExtArgs>>): Prisma__LootClient<$Result.GetResult<Prisma.$LootPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootCountArgs} args - Arguments to filter Loots to count.
     * @example
     * // Count the number of Loots
     * const count = await prisma.loot.count({
     *   where: {
     *     // ... the filter for the Loots we want to count
     *   }
     * })
    **/
    count<T extends LootCountArgs>(
      args?: Subset<T, LootCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LootCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LootAggregateArgs>(args: Subset<T, LootAggregateArgs>): Prisma.PrismaPromise<GetLootAggregateType<T>>

    /**
     * Group by Loot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LootGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LootGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LootGroupByArgs['orderBy'] }
        : { orderBy?: LootGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LootGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLootGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loot model
   */
  readonly fields: LootFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LootClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boss<T extends BossDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BossDefaultArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Loot$usersArgs<ExtArgs> = {}>(args?: Subset<T, Loot$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WishlistItem<T extends Loot$WishlistItemArgs<ExtArgs> = {}>(args?: Subset<T, Loot$WishlistItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LootHistory<T extends Loot$LootHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Loot$LootHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LootHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Loot model
   */
  interface LootFieldRefs {
    readonly id: FieldRef<"Loot", 'Int'>
    readonly name: FieldRef<"Loot", 'String'>
    readonly url: FieldRef<"Loot", 'String'>
    readonly bossId: FieldRef<"Loot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Loot findUnique
   */
  export type LootFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter, which Loot to fetch.
     */
    where: LootWhereUniqueInput
  }

  /**
   * Loot findUniqueOrThrow
   */
  export type LootFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter, which Loot to fetch.
     */
    where: LootWhereUniqueInput
  }

  /**
   * Loot findFirst
   */
  export type LootFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter, which Loot to fetch.
     */
    where?: LootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loots to fetch.
     */
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loots.
     */
    cursor?: LootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loots.
     */
    distinct?: LootScalarFieldEnum | LootScalarFieldEnum[]
  }

  /**
   * Loot findFirstOrThrow
   */
  export type LootFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter, which Loot to fetch.
     */
    where?: LootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loots to fetch.
     */
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loots.
     */
    cursor?: LootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loots.
     */
    distinct?: LootScalarFieldEnum | LootScalarFieldEnum[]
  }

  /**
   * Loot findMany
   */
  export type LootFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter, which Loots to fetch.
     */
    where?: LootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loots to fetch.
     */
    orderBy?: LootOrderByWithRelationInput | LootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loots.
     */
    cursor?: LootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loots.
     */
    skip?: number
    distinct?: LootScalarFieldEnum | LootScalarFieldEnum[]
  }

  /**
   * Loot create
   */
  export type LootCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * The data needed to create a Loot.
     */
    data: XOR<LootCreateInput, LootUncheckedCreateInput>
  }

  /**
   * Loot createMany
   */
  export type LootCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loots.
     */
    data: LootCreateManyInput | LootCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loot createManyAndReturn
   */
  export type LootCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * The data used to create many Loots.
     */
    data: LootCreateManyInput | LootCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loot update
   */
  export type LootUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * The data needed to update a Loot.
     */
    data: XOR<LootUpdateInput, LootUncheckedUpdateInput>
    /**
     * Choose, which Loot to update.
     */
    where: LootWhereUniqueInput
  }

  /**
   * Loot updateMany
   */
  export type LootUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loots.
     */
    data: XOR<LootUpdateManyMutationInput, LootUncheckedUpdateManyInput>
    /**
     * Filter which Loots to update
     */
    where?: LootWhereInput
    /**
     * Limit how many Loots to update.
     */
    limit?: number
  }

  /**
   * Loot updateManyAndReturn
   */
  export type LootUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * The data used to update Loots.
     */
    data: XOR<LootUpdateManyMutationInput, LootUncheckedUpdateManyInput>
    /**
     * Filter which Loots to update
     */
    where?: LootWhereInput
    /**
     * Limit how many Loots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loot upsert
   */
  export type LootUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * The filter to search for the Loot to update in case it exists.
     */
    where: LootWhereUniqueInput
    /**
     * In case the Loot found by the `where` argument doesn't exist, create a new Loot with this data.
     */
    create: XOR<LootCreateInput, LootUncheckedCreateInput>
    /**
     * In case the Loot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LootUpdateInput, LootUncheckedUpdateInput>
  }

  /**
   * Loot delete
   */
  export type LootDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
    /**
     * Filter which Loot to delete.
     */
    where: LootWhereUniqueInput
  }

  /**
   * Loot deleteMany
   */
  export type LootDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loots to delete
     */
    where?: LootWhereInput
    /**
     * Limit how many Loots to delete.
     */
    limit?: number
  }

  /**
   * Loot.users
   */
  export type Loot$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Loot.WishlistItem
   */
  export type Loot$WishlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    cursor?: WishlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * Loot.LootHistory
   */
  export type Loot$LootHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LootHistory
     */
    select?: LootHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LootHistory
     */
    omit?: LootHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootHistoryInclude<ExtArgs> | null
    where?: LootHistoryWhereInput
    orderBy?: LootHistoryOrderByWithRelationInput | LootHistoryOrderByWithRelationInput[]
    cursor?: LootHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LootHistoryScalarFieldEnum | LootHistoryScalarFieldEnum[]
  }

  /**
   * Loot without action
   */
  export type LootDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loot
     */
    select?: LootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loot
     */
    omit?: LootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LootInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    classeId: 'classeId',
    specialisationId: 'specialisationId',
    raidId: 'raidId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClasseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const SpecialisationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    classeId: 'classeId'
  };

  export type SpecialisationScalarFieldEnum = (typeof SpecialisationScalarFieldEnum)[keyof typeof SpecialisationScalarFieldEnum]


  export const RaidScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdById: 'createdById'
  };

  export type RaidScalarFieldEnum = (typeof RaidScalarFieldEnum)[keyof typeof RaidScalarFieldEnum]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    raidId: 'raidId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const RaidPointsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    raidId: 'raidId',
    points: 'points'
  };

  export type RaidPointsScalarFieldEnum = (typeof RaidPointsScalarFieldEnum)[keyof typeof RaidPointsScalarFieldEnum]


  export const WishlistItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lootId: 'lootId',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type WishlistItemScalarFieldEnum = (typeof WishlistItemScalarFieldEnum)[keyof typeof WishlistItemScalarFieldEnum]


  export const LootHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lootId: 'lootId',
    raidId: 'raidId',
    priority: 'priority',
    pointsCost: 'pointsCost',
    createdAt: 'createdAt'
  };

  export type LootHistoryScalarFieldEnum = (typeof LootHistoryScalarFieldEnum)[keyof typeof LootHistoryScalarFieldEnum]


  export const RaidAttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    raidId: 'raidId',
    pointsGiven: 'pointsGiven',
    createdAt: 'createdAt'
  };

  export type RaidAttendanceScalarFieldEnum = (typeof RaidAttendanceScalarFieldEnum)[keyof typeof RaidAttendanceScalarFieldEnum]


  export const BossScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BossScalarFieldEnum = (typeof BossScalarFieldEnum)[keyof typeof BossScalarFieldEnum]


  export const LootScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    bossId: 'bossId'
  };

  export type LootScalarFieldEnum = (typeof LootScalarFieldEnum)[keyof typeof LootScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    classeId?: IntFilter<"User"> | number
    specialisationId?: IntFilter<"User"> | number
    raidId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    raid?: XOR<RaidNullableScalarRelationFilter, RaidWhereInput> | null
    createdRaids?: RaidListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    loots?: LootListRelationFilter
    WishlistItem?: WishlistItemListRelationFilter
    RaidPoints?: XOR<RaidPointsNullableScalarRelationFilter, RaidPointsWhereInput> | null
    LootHistory?: LootHistoryListRelationFilter
    attendances?: RaidAttendanceListRelationFilter
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    specialisation?: XOR<SpecialisationScalarRelationFilter, SpecialisationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    raid?: RaidOrderByWithRelationInput
    createdRaids?: RaidOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
    loots?: LootOrderByRelationAggregateInput
    WishlistItem?: WishlistItemOrderByRelationAggregateInput
    RaidPoints?: RaidPointsOrderByWithRelationInput
    LootHistory?: LootHistoryOrderByRelationAggregateInput
    attendances?: RaidAttendanceOrderByRelationAggregateInput
    classe?: ClasseOrderByWithRelationInput
    specialisation?: SpecialisationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    classeId?: IntFilter<"User"> | number
    specialisationId?: IntFilter<"User"> | number
    raidId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    raid?: XOR<RaidNullableScalarRelationFilter, RaidWhereInput> | null
    createdRaids?: RaidListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    loots?: LootListRelationFilter
    WishlistItem?: WishlistItemListRelationFilter
    RaidPoints?: XOR<RaidPointsNullableScalarRelationFilter, RaidPointsWhereInput> | null
    LootHistory?: LootHistoryListRelationFilter
    attendances?: RaidAttendanceListRelationFilter
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    specialisation?: XOR<SpecialisationScalarRelationFilter, SpecialisationWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    classeId?: IntWithAggregatesFilter<"User"> | number
    specialisationId?: IntWithAggregatesFilter<"User"> | number
    raidId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClasseWhereInput = {
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    id?: IntFilter<"Classe"> | number
    name?: StringFilter<"Classe"> | string
    specialisation?: SpecialisationListRelationFilter
    users?: UserListRelationFilter
  }

  export type ClasseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    specialisation?: SpecialisationOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    specialisation?: SpecialisationListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type ClasseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ClasseCountOrderByAggregateInput
    _avg?: ClasseAvgOrderByAggregateInput
    _max?: ClasseMaxOrderByAggregateInput
    _min?: ClasseMinOrderByAggregateInput
    _sum?: ClasseSumOrderByAggregateInput
  }

  export type ClasseScalarWhereWithAggregatesInput = {
    AND?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    OR?: ClasseScalarWhereWithAggregatesInput[]
    NOT?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classe"> | number
    name?: StringWithAggregatesFilter<"Classe"> | string
  }

  export type SpecialisationWhereInput = {
    AND?: SpecialisationWhereInput | SpecialisationWhereInput[]
    OR?: SpecialisationWhereInput[]
    NOT?: SpecialisationWhereInput | SpecialisationWhereInput[]
    id?: IntFilter<"Specialisation"> | number
    name?: StringFilter<"Specialisation"> | string
    classeId?: IntFilter<"Specialisation"> | number
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    users?: UserListRelationFilter
  }

  export type SpecialisationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    classeId?: SortOrder
    classe?: ClasseOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type SpecialisationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_classeId?: SpecialisationNameClasseIdCompoundUniqueInput
    AND?: SpecialisationWhereInput | SpecialisationWhereInput[]
    OR?: SpecialisationWhereInput[]
    NOT?: SpecialisationWhereInput | SpecialisationWhereInput[]
    name?: StringFilter<"Specialisation"> | string
    classeId?: IntFilter<"Specialisation"> | number
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    users?: UserListRelationFilter
  }, "id" | "name_classeId">

  export type SpecialisationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    classeId?: SortOrder
    _count?: SpecialisationCountOrderByAggregateInput
    _avg?: SpecialisationAvgOrderByAggregateInput
    _max?: SpecialisationMaxOrderByAggregateInput
    _min?: SpecialisationMinOrderByAggregateInput
    _sum?: SpecialisationSumOrderByAggregateInput
  }

  export type SpecialisationScalarWhereWithAggregatesInput = {
    AND?: SpecialisationScalarWhereWithAggregatesInput | SpecialisationScalarWhereWithAggregatesInput[]
    OR?: SpecialisationScalarWhereWithAggregatesInput[]
    NOT?: SpecialisationScalarWhereWithAggregatesInput | SpecialisationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialisation"> | number
    name?: StringWithAggregatesFilter<"Specialisation"> | string
    classeId?: IntWithAggregatesFilter<"Specialisation"> | number
  }

  export type RaidWhereInput = {
    AND?: RaidWhereInput | RaidWhereInput[]
    OR?: RaidWhereInput[]
    NOT?: RaidWhereInput | RaidWhereInput[]
    id?: IntFilter<"Raid"> | number
    name?: StringFilter<"Raid"> | string
    createdById?: IntFilter<"Raid"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    RaidPoints?: RaidPointsListRelationFilter
    LootHistory?: LootHistoryListRelationFilter
    attendances?: RaidAttendanceListRelationFilter
    users?: UserListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }

  export type RaidOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    RaidPoints?: RaidPointsOrderByRelationAggregateInput
    LootHistory?: LootHistoryOrderByRelationAggregateInput
    attendances?: RaidAttendanceOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
  }

  export type RaidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaidWhereInput | RaidWhereInput[]
    OR?: RaidWhereInput[]
    NOT?: RaidWhereInput | RaidWhereInput[]
    name?: StringFilter<"Raid"> | string
    createdById?: IntFilter<"Raid"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    RaidPoints?: RaidPointsListRelationFilter
    LootHistory?: LootHistoryListRelationFilter
    attendances?: RaidAttendanceListRelationFilter
    users?: UserListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }, "id">

  export type RaidOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    _count?: RaidCountOrderByAggregateInput
    _avg?: RaidAvgOrderByAggregateInput
    _max?: RaidMaxOrderByAggregateInput
    _min?: RaidMinOrderByAggregateInput
    _sum?: RaidSumOrderByAggregateInput
  }

  export type RaidScalarWhereWithAggregatesInput = {
    AND?: RaidScalarWhereWithAggregatesInput | RaidScalarWhereWithAggregatesInput[]
    OR?: RaidScalarWhereWithAggregatesInput[]
    NOT?: RaidScalarWhereWithAggregatesInput | RaidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Raid"> | number
    name?: StringWithAggregatesFilter<"Raid"> | string
    createdById?: IntWithAggregatesFilter<"Raid"> | number
  }

  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: IntFilter<"JoinRequest"> | number
    userId?: IntFilter<"JoinRequest"> | number
    raidId?: IntFilter<"JoinRequest"> | number
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    raid?: RaidOrderByWithRelationInput
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_raidId?: JoinRequestUserIdRaidIdCompoundUniqueInput
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    userId?: IntFilter<"JoinRequest"> | number
    raidId?: IntFilter<"JoinRequest"> | number
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }, "id" | "userId_raidId">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _avg?: JoinRequestAvgOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
    _sum?: JoinRequestSumOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JoinRequest"> | number
    userId?: IntWithAggregatesFilter<"JoinRequest"> | number
    raidId?: IntWithAggregatesFilter<"JoinRequest"> | number
    status?: StringWithAggregatesFilter<"JoinRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
  }

  export type RaidPointsWhereInput = {
    AND?: RaidPointsWhereInput | RaidPointsWhereInput[]
    OR?: RaidPointsWhereInput[]
    NOT?: RaidPointsWhereInput | RaidPointsWhereInput[]
    id?: IntFilter<"RaidPoints"> | number
    userId?: IntFilter<"RaidPoints"> | number
    raidId?: IntFilter<"RaidPoints"> | number
    points?: IntFilter<"RaidPoints"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }

  export type RaidPointsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
    user?: UserOrderByWithRelationInput
    raid?: RaidOrderByWithRelationInput
  }

  export type RaidPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    userId_raidId?: RaidPointsUserIdRaidIdCompoundUniqueInput
    AND?: RaidPointsWhereInput | RaidPointsWhereInput[]
    OR?: RaidPointsWhereInput[]
    NOT?: RaidPointsWhereInput | RaidPointsWhereInput[]
    raidId?: IntFilter<"RaidPoints"> | number
    points?: IntFilter<"RaidPoints"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }, "id" | "userId" | "userId_raidId">

  export type RaidPointsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
    _count?: RaidPointsCountOrderByAggregateInput
    _avg?: RaidPointsAvgOrderByAggregateInput
    _max?: RaidPointsMaxOrderByAggregateInput
    _min?: RaidPointsMinOrderByAggregateInput
    _sum?: RaidPointsSumOrderByAggregateInput
  }

  export type RaidPointsScalarWhereWithAggregatesInput = {
    AND?: RaidPointsScalarWhereWithAggregatesInput | RaidPointsScalarWhereWithAggregatesInput[]
    OR?: RaidPointsScalarWhereWithAggregatesInput[]
    NOT?: RaidPointsScalarWhereWithAggregatesInput | RaidPointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaidPoints"> | number
    userId?: IntWithAggregatesFilter<"RaidPoints"> | number
    raidId?: IntWithAggregatesFilter<"RaidPoints"> | number
    points?: IntWithAggregatesFilter<"RaidPoints"> | number
  }

  export type WishlistItemWhereInput = {
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    id?: IntFilter<"WishlistItem"> | number
    userId?: IntFilter<"WishlistItem"> | number
    lootId?: IntFilter<"WishlistItem"> | number
    priority?: IntFilter<"WishlistItem"> | number
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loot?: XOR<LootScalarRelationFilter, LootWhereInput>
  }

  export type WishlistItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    loot?: LootOrderByWithRelationInput
  }

  export type WishlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_lootId?: WishlistItemUserIdLootIdCompoundUniqueInput
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    userId?: IntFilter<"WishlistItem"> | number
    lootId?: IntFilter<"WishlistItem"> | number
    priority?: IntFilter<"WishlistItem"> | number
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loot?: XOR<LootScalarRelationFilter, LootWhereInput>
  }, "id" | "userId_lootId">

  export type WishlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: WishlistItemCountOrderByAggregateInput
    _avg?: WishlistItemAvgOrderByAggregateInput
    _max?: WishlistItemMaxOrderByAggregateInput
    _min?: WishlistItemMinOrderByAggregateInput
    _sum?: WishlistItemSumOrderByAggregateInput
  }

  export type WishlistItemScalarWhereWithAggregatesInput = {
    AND?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    OR?: WishlistItemScalarWhereWithAggregatesInput[]
    NOT?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WishlistItem"> | number
    userId?: IntWithAggregatesFilter<"WishlistItem"> | number
    lootId?: IntWithAggregatesFilter<"WishlistItem"> | number
    priority?: IntWithAggregatesFilter<"WishlistItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WishlistItem"> | Date | string
  }

  export type LootHistoryWhereInput = {
    AND?: LootHistoryWhereInput | LootHistoryWhereInput[]
    OR?: LootHistoryWhereInput[]
    NOT?: LootHistoryWhereInput | LootHistoryWhereInput[]
    id?: IntFilter<"LootHistory"> | number
    userId?: IntFilter<"LootHistory"> | number
    lootId?: IntFilter<"LootHistory"> | number
    raidId?: IntFilter<"LootHistory"> | number
    priority?: IntFilter<"LootHistory"> | number
    pointsCost?: IntFilter<"LootHistory"> | number
    createdAt?: DateTimeFilter<"LootHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loot?: XOR<LootScalarRelationFilter, LootWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }

  export type LootHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    loot?: LootOrderByWithRelationInput
    raid?: RaidOrderByWithRelationInput
  }

  export type LootHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LootHistoryWhereInput | LootHistoryWhereInput[]
    OR?: LootHistoryWhereInput[]
    NOT?: LootHistoryWhereInput | LootHistoryWhereInput[]
    userId?: IntFilter<"LootHistory"> | number
    lootId?: IntFilter<"LootHistory"> | number
    raidId?: IntFilter<"LootHistory"> | number
    priority?: IntFilter<"LootHistory"> | number
    pointsCost?: IntFilter<"LootHistory"> | number
    createdAt?: DateTimeFilter<"LootHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loot?: XOR<LootScalarRelationFilter, LootWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }, "id">

  export type LootHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
    createdAt?: SortOrder
    _count?: LootHistoryCountOrderByAggregateInput
    _avg?: LootHistoryAvgOrderByAggregateInput
    _max?: LootHistoryMaxOrderByAggregateInput
    _min?: LootHistoryMinOrderByAggregateInput
    _sum?: LootHistorySumOrderByAggregateInput
  }

  export type LootHistoryScalarWhereWithAggregatesInput = {
    AND?: LootHistoryScalarWhereWithAggregatesInput | LootHistoryScalarWhereWithAggregatesInput[]
    OR?: LootHistoryScalarWhereWithAggregatesInput[]
    NOT?: LootHistoryScalarWhereWithAggregatesInput | LootHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LootHistory"> | number
    userId?: IntWithAggregatesFilter<"LootHistory"> | number
    lootId?: IntWithAggregatesFilter<"LootHistory"> | number
    raidId?: IntWithAggregatesFilter<"LootHistory"> | number
    priority?: IntWithAggregatesFilter<"LootHistory"> | number
    pointsCost?: IntWithAggregatesFilter<"LootHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LootHistory"> | Date | string
  }

  export type RaidAttendanceWhereInput = {
    AND?: RaidAttendanceWhereInput | RaidAttendanceWhereInput[]
    OR?: RaidAttendanceWhereInput[]
    NOT?: RaidAttendanceWhereInput | RaidAttendanceWhereInput[]
    id?: IntFilter<"RaidAttendance"> | number
    userId?: IntFilter<"RaidAttendance"> | number
    raidId?: IntFilter<"RaidAttendance"> | number
    pointsGiven?: IntFilter<"RaidAttendance"> | number
    createdAt?: DateTimeFilter<"RaidAttendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }

  export type RaidAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    raid?: RaidOrderByWithRelationInput
  }

  export type RaidAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaidAttendanceWhereInput | RaidAttendanceWhereInput[]
    OR?: RaidAttendanceWhereInput[]
    NOT?: RaidAttendanceWhereInput | RaidAttendanceWhereInput[]
    userId?: IntFilter<"RaidAttendance"> | number
    raidId?: IntFilter<"RaidAttendance"> | number
    pointsGiven?: IntFilter<"RaidAttendance"> | number
    createdAt?: DateTimeFilter<"RaidAttendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    raid?: XOR<RaidScalarRelationFilter, RaidWhereInput>
  }, "id">

  export type RaidAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
    createdAt?: SortOrder
    _count?: RaidAttendanceCountOrderByAggregateInput
    _avg?: RaidAttendanceAvgOrderByAggregateInput
    _max?: RaidAttendanceMaxOrderByAggregateInput
    _min?: RaidAttendanceMinOrderByAggregateInput
    _sum?: RaidAttendanceSumOrderByAggregateInput
  }

  export type RaidAttendanceScalarWhereWithAggregatesInput = {
    AND?: RaidAttendanceScalarWhereWithAggregatesInput | RaidAttendanceScalarWhereWithAggregatesInput[]
    OR?: RaidAttendanceScalarWhereWithAggregatesInput[]
    NOT?: RaidAttendanceScalarWhereWithAggregatesInput | RaidAttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaidAttendance"> | number
    userId?: IntWithAggregatesFilter<"RaidAttendance"> | number
    raidId?: IntWithAggregatesFilter<"RaidAttendance"> | number
    pointsGiven?: IntWithAggregatesFilter<"RaidAttendance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RaidAttendance"> | Date | string
  }

  export type BossWhereInput = {
    AND?: BossWhereInput | BossWhereInput[]
    OR?: BossWhereInput[]
    NOT?: BossWhereInput | BossWhereInput[]
    id?: IntFilter<"Boss"> | number
    name?: StringFilter<"Boss"> | string
    loots?: LootListRelationFilter
  }

  export type BossOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    loots?: LootOrderByRelationAggregateInput
  }

  export type BossWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BossWhereInput | BossWhereInput[]
    OR?: BossWhereInput[]
    NOT?: BossWhereInput | BossWhereInput[]
    name?: StringFilter<"Boss"> | string
    loots?: LootListRelationFilter
  }, "id">

  export type BossOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BossCountOrderByAggregateInput
    _avg?: BossAvgOrderByAggregateInput
    _max?: BossMaxOrderByAggregateInput
    _min?: BossMinOrderByAggregateInput
    _sum?: BossSumOrderByAggregateInput
  }

  export type BossScalarWhereWithAggregatesInput = {
    AND?: BossScalarWhereWithAggregatesInput | BossScalarWhereWithAggregatesInput[]
    OR?: BossScalarWhereWithAggregatesInput[]
    NOT?: BossScalarWhereWithAggregatesInput | BossScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Boss"> | number
    name?: StringWithAggregatesFilter<"Boss"> | string
  }

  export type LootWhereInput = {
    AND?: LootWhereInput | LootWhereInput[]
    OR?: LootWhereInput[]
    NOT?: LootWhereInput | LootWhereInput[]
    id?: IntFilter<"Loot"> | number
    name?: StringFilter<"Loot"> | string
    url?: StringFilter<"Loot"> | string
    bossId?: IntFilter<"Loot"> | number
    boss?: XOR<BossScalarRelationFilter, BossWhereInput>
    users?: UserListRelationFilter
    WishlistItem?: WishlistItemListRelationFilter
    LootHistory?: LootHistoryListRelationFilter
  }

  export type LootOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    bossId?: SortOrder
    boss?: BossOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    WishlistItem?: WishlistItemOrderByRelationAggregateInput
    LootHistory?: LootHistoryOrderByRelationAggregateInput
  }

  export type LootWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_bossId?: LootNameBossIdCompoundUniqueInput
    AND?: LootWhereInput | LootWhereInput[]
    OR?: LootWhereInput[]
    NOT?: LootWhereInput | LootWhereInput[]
    name?: StringFilter<"Loot"> | string
    url?: StringFilter<"Loot"> | string
    bossId?: IntFilter<"Loot"> | number
    boss?: XOR<BossScalarRelationFilter, BossWhereInput>
    users?: UserListRelationFilter
    WishlistItem?: WishlistItemListRelationFilter
    LootHistory?: LootHistoryListRelationFilter
  }, "id" | "name_bossId">

  export type LootOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    bossId?: SortOrder
    _count?: LootCountOrderByAggregateInput
    _avg?: LootAvgOrderByAggregateInput
    _max?: LootMaxOrderByAggregateInput
    _min?: LootMinOrderByAggregateInput
    _sum?: LootSumOrderByAggregateInput
  }

  export type LootScalarWhereWithAggregatesInput = {
    AND?: LootScalarWhereWithAggregatesInput | LootScalarWhereWithAggregatesInput[]
    OR?: LootScalarWhereWithAggregatesInput[]
    NOT?: LootScalarWhereWithAggregatesInput | LootScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Loot"> | number
    name?: StringWithAggregatesFilter<"Loot"> | string
    url?: StringWithAggregatesFilter<"Loot"> | string
    bossId?: IntWithAggregatesFilter<"Loot"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClasseCreateInput = {
    name: string
    specialisation?: SpecialisationCreateNestedManyWithoutClasseInput
    users?: UserCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateInput = {
    id?: number
    name: string
    specialisation?: SpecialisationUncheckedCreateNestedManyWithoutClasseInput
    users?: UserUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialisation?: SpecialisationUpdateManyWithoutClasseNestedInput
    users?: UserUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialisation?: SpecialisationUncheckedUpdateManyWithoutClasseNestedInput
    users?: UserUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type ClasseCreateManyInput = {
    id?: number
    name: string
  }

  export type ClasseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialisationCreateInput = {
    name: string
    classe: ClasseCreateNestedOneWithoutSpecialisationInput
    users?: UserCreateNestedManyWithoutSpecialisationInput
  }

  export type SpecialisationUncheckedCreateInput = {
    id?: number
    name: string
    classeId: number
    users?: UserUncheckedCreateNestedManyWithoutSpecialisationInput
  }

  export type SpecialisationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    classe?: ClasseUpdateOneRequiredWithoutSpecialisationNestedInput
    users?: UserUpdateManyWithoutSpecialisationNestedInput
  }

  export type SpecialisationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutSpecialisationNestedInput
  }

  export type SpecialisationCreateManyInput = {
    id?: number
    name: string
    classeId: number
  }

  export type SpecialisationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialisationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
  }

  export type RaidCreateInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateInput = {
    id?: number
    name: string
    createdById: number
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type RaidCreateManyInput = {
    id?: number
    name: string
    createdById: number
  }

  export type RaidUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RaidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type JoinRequestCreateInput = {
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJoinRequestsInput
    raid: RaidCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: number
    userId: number
    raidId: number
    status?: string
    createdAt?: Date | string
  }

  export type JoinRequestUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
    raid?: RaidUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateManyInput = {
    id?: number
    userId: number
    raidId: number
    status?: string
    createdAt?: Date | string
  }

  export type JoinRequestUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidPointsCreateInput = {
    points?: number
    user: UserCreateNestedOneWithoutRaidPointsInput
    raid: RaidCreateNestedOneWithoutRaidPointsInput
  }

  export type RaidPointsUncheckedCreateInput = {
    id?: number
    userId: number
    raidId: number
    points?: number
  }

  export type RaidPointsUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRaidPointsNestedInput
    raid?: RaidUpdateOneRequiredWithoutRaidPointsNestedInput
  }

  export type RaidPointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RaidPointsCreateManyInput = {
    id?: number
    userId: number
    raidId: number
    points?: number
  }

  export type RaidPointsUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RaidPointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WishlistItemCreateInput = {
    priority: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWishlistItemInput
    loot: LootCreateNestedOneWithoutWishlistItemInput
  }

  export type WishlistItemUncheckedCreateInput = {
    id?: number
    userId: number
    lootId: number
    priority: number
    createdAt?: Date | string
  }

  export type WishlistItemUpdateInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishlistItemNestedInput
    loot?: LootUpdateOneRequiredWithoutWishlistItemNestedInput
  }

  export type WishlistItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemCreateManyInput = {
    id?: number
    userId: number
    lootId: number
    priority: number
    createdAt?: Date | string
  }

  export type WishlistItemUpdateManyMutationInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryCreateInput = {
    priority: number
    pointsCost: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLootHistoryInput
    loot: LootCreateNestedOneWithoutLootHistoryInput
    raid: RaidCreateNestedOneWithoutLootHistoryInput
  }

  export type LootHistoryUncheckedCreateInput = {
    id?: number
    userId: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type LootHistoryUpdateInput = {
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLootHistoryNestedInput
    loot?: LootUpdateOneRequiredWithoutLootHistoryNestedInput
    raid?: RaidUpdateOneRequiredWithoutLootHistoryNestedInput
  }

  export type LootHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryCreateManyInput = {
    id?: number
    userId: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type LootHistoryUpdateManyMutationInput = {
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceCreateInput = {
    pointsGiven?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
    raid: RaidCreateNestedOneWithoutAttendancesInput
  }

  export type RaidAttendanceUncheckedCreateInput = {
    id?: number
    userId: number
    raidId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type RaidAttendanceUpdateInput = {
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    raid?: RaidUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type RaidAttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceCreateManyInput = {
    id?: number
    userId: number
    raidId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type RaidAttendanceUpdateManyMutationInput = {
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossCreateInput = {
    name: string
    loots?: LootCreateNestedManyWithoutBossInput
  }

  export type BossUncheckedCreateInput = {
    id?: number
    name: string
    loots?: LootUncheckedCreateNestedManyWithoutBossInput
  }

  export type BossUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    loots?: LootUpdateManyWithoutBossNestedInput
  }

  export type BossUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    loots?: LootUncheckedUpdateManyWithoutBossNestedInput
  }

  export type BossCreateManyInput = {
    id?: number
    name: string
  }

  export type BossUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BossUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LootCreateInput = {
    name: string
    url: string
    boss: BossCreateNestedOneWithoutLootsInput
    users?: UserCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryCreateNestedManyWithoutLootInput
  }

  export type LootUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    bossId: number
    users?: UserUncheckedCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutLootInput
  }

  export type LootUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutLootsNestedInput
    users?: UserUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutLootNestedInput
  }

  export type LootCreateManyInput = {
    id?: number
    name: string
    url: string
    bossId: number
  }

  export type LootUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LootUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RaidNullableScalarRelationFilter = {
    is?: RaidWhereInput | null
    isNot?: RaidWhereInput | null
  }

  export type RaidListRelationFilter = {
    every?: RaidWhereInput
    some?: RaidWhereInput
    none?: RaidWhereInput
  }

  export type JoinRequestListRelationFilter = {
    every?: JoinRequestWhereInput
    some?: JoinRequestWhereInput
    none?: JoinRequestWhereInput
  }

  export type LootListRelationFilter = {
    every?: LootWhereInput
    some?: LootWhereInput
    none?: LootWhereInput
  }

  export type WishlistItemListRelationFilter = {
    every?: WishlistItemWhereInput
    some?: WishlistItemWhereInput
    none?: WishlistItemWhereInput
  }

  export type RaidPointsNullableScalarRelationFilter = {
    is?: RaidPointsWhereInput | null
    isNot?: RaidPointsWhereInput | null
  }

  export type LootHistoryListRelationFilter = {
    every?: LootHistoryWhereInput
    some?: LootHistoryWhereInput
    none?: LootHistoryWhereInput
  }

  export type RaidAttendanceListRelationFilter = {
    every?: RaidAttendanceWhereInput
    some?: RaidAttendanceWhereInput
    none?: RaidAttendanceWhereInput
  }

  export type ClasseScalarRelationFilter = {
    is?: ClasseWhereInput
    isNot?: ClasseWhereInput
  }

  export type SpecialisationScalarRelationFilter = {
    is?: SpecialisationWhereInput
    isNot?: SpecialisationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RaidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LootOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LootHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaidAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    classeId?: SortOrder
    specialisationId?: SortOrder
    raidId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SpecialisationListRelationFilter = {
    every?: SpecialisationWhereInput
    some?: SpecialisationWhereInput
    none?: SpecialisationWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SpecialisationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClasseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClasseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClasseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClasseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClasseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialisationNameClasseIdCompoundUniqueInput = {
    name: string
    classeId: number
  }

  export type SpecialisationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classeId?: SortOrder
  }

  export type SpecialisationAvgOrderByAggregateInput = {
    id?: SortOrder
    classeId?: SortOrder
  }

  export type SpecialisationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classeId?: SortOrder
  }

  export type SpecialisationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classeId?: SortOrder
  }

  export type SpecialisationSumOrderByAggregateInput = {
    id?: SortOrder
    classeId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RaidPointsListRelationFilter = {
    every?: RaidPointsWhereInput
    some?: RaidPointsWhereInput
    none?: RaidPointsWhereInput
  }

  export type RaidPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaidCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
  }

  export type RaidAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type RaidMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
  }

  export type RaidMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
  }

  export type RaidSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type RaidScalarRelationFilter = {
    is?: RaidWhereInput
    isNot?: RaidWhereInput
  }

  export type JoinRequestUserIdRaidIdCompoundUniqueInput = {
    userId: number
    raidId: number
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
  }

  export type RaidPointsUserIdRaidIdCompoundUniqueInput = {
    userId: number
    raidId: number
  }

  export type RaidPointsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
  }

  export type RaidPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
  }

  export type RaidPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
  }

  export type RaidPointsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
  }

  export type RaidPointsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    points?: SortOrder
  }

  export type LootScalarRelationFilter = {
    is?: LootWhereInput
    isNot?: LootWhereInput
  }

  export type WishlistItemUserIdLootIdCompoundUniqueInput = {
    userId: number
    lootId: number
  }

  export type WishlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
  }

  export type WishlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    priority?: SortOrder
  }

  export type LootHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
    createdAt?: SortOrder
  }

  export type LootHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
  }

  export type LootHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
    createdAt?: SortOrder
  }

  export type LootHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
    createdAt?: SortOrder
  }

  export type LootHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lootId?: SortOrder
    raidId?: SortOrder
    priority?: SortOrder
    pointsCost?: SortOrder
  }

  export type RaidAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
    createdAt?: SortOrder
  }

  export type RaidAttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
  }

  export type RaidAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
    createdAt?: SortOrder
  }

  export type RaidAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
    createdAt?: SortOrder
  }

  export type RaidAttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raidId?: SortOrder
    pointsGiven?: SortOrder
  }

  export type BossCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BossAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BossMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BossMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BossSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BossScalarRelationFilter = {
    is?: BossWhereInput
    isNot?: BossWhereInput
  }

  export type LootNameBossIdCompoundUniqueInput = {
    name: string
    bossId: number
  }

  export type LootCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    bossId?: SortOrder
  }

  export type LootAvgOrderByAggregateInput = {
    id?: SortOrder
    bossId?: SortOrder
  }

  export type LootMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    bossId?: SortOrder
  }

  export type LootMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    bossId?: SortOrder
  }

  export type LootSumOrderByAggregateInput = {
    id?: SortOrder
    bossId?: SortOrder
  }

  export type RaidCreateNestedOneWithoutUsersInput = {
    create?: XOR<RaidCreateWithoutUsersInput, RaidUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RaidCreateOrConnectWithoutUsersInput
    connect?: RaidWhereUniqueInput
  }

  export type RaidCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput> | RaidCreateWithoutCreatedByInput[] | RaidUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RaidCreateOrConnectWithoutCreatedByInput | RaidCreateOrConnectWithoutCreatedByInput[]
    createMany?: RaidCreateManyCreatedByInputEnvelope
    connect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type LootCreateNestedManyWithoutUsersInput = {
    create?: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput> | LootCreateWithoutUsersInput[] | LootUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LootCreateOrConnectWithoutUsersInput | LootCreateOrConnectWithoutUsersInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
  }

  export type WishlistItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type RaidPointsCreateNestedOneWithoutUserInput = {
    create?: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
    connectOrCreate?: RaidPointsCreateOrConnectWithoutUserInput
    connect?: RaidPointsWhereUniqueInput
  }

  export type LootHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput> | LootHistoryCreateWithoutUserInput[] | LootHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutUserInput | LootHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LootHistoryCreateManyUserInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type RaidAttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput> | RaidAttendanceCreateWithoutUserInput[] | RaidAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutUserInput | RaidAttendanceCreateOrConnectWithoutUserInput[]
    createMany?: RaidAttendanceCreateManyUserInputEnvelope
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
  }

  export type ClasseCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClasseCreateWithoutUsersInput, ClasseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutUsersInput
    connect?: ClasseWhereUniqueInput
  }

  export type SpecialisationCreateNestedOneWithoutUsersInput = {
    create?: XOR<SpecialisationCreateWithoutUsersInput, SpecialisationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SpecialisationCreateOrConnectWithoutUsersInput
    connect?: SpecialisationWhereUniqueInput
  }

  export type RaidUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput> | RaidCreateWithoutCreatedByInput[] | RaidUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RaidCreateOrConnectWithoutCreatedByInput | RaidCreateOrConnectWithoutCreatedByInput[]
    createMany?: RaidCreateManyCreatedByInputEnvelope
    connect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type LootUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput> | LootCreateWithoutUsersInput[] | LootUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LootCreateOrConnectWithoutUsersInput | LootCreateOrConnectWithoutUsersInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
  }

  export type WishlistItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type RaidPointsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
    connectOrCreate?: RaidPointsCreateOrConnectWithoutUserInput
    connect?: RaidPointsWhereUniqueInput
  }

  export type LootHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput> | LootHistoryCreateWithoutUserInput[] | LootHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutUserInput | LootHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LootHistoryCreateManyUserInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type RaidAttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput> | RaidAttendanceCreateWithoutUserInput[] | RaidAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutUserInput | RaidAttendanceCreateOrConnectWithoutUserInput[]
    createMany?: RaidAttendanceCreateManyUserInputEnvelope
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RaidUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RaidCreateWithoutUsersInput, RaidUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RaidCreateOrConnectWithoutUsersInput
    upsert?: RaidUpsertWithoutUsersInput
    disconnect?: RaidWhereInput | boolean
    delete?: RaidWhereInput | boolean
    connect?: RaidWhereUniqueInput
    update?: XOR<XOR<RaidUpdateToOneWithWhereWithoutUsersInput, RaidUpdateWithoutUsersInput>, RaidUncheckedUpdateWithoutUsersInput>
  }

  export type RaidUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput> | RaidCreateWithoutCreatedByInput[] | RaidUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RaidCreateOrConnectWithoutCreatedByInput | RaidCreateOrConnectWithoutCreatedByInput[]
    upsert?: RaidUpsertWithWhereUniqueWithoutCreatedByInput | RaidUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RaidCreateManyCreatedByInputEnvelope
    set?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    disconnect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    delete?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    connect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    update?: RaidUpdateWithWhereUniqueWithoutCreatedByInput | RaidUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RaidUpdateManyWithWhereWithoutCreatedByInput | RaidUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RaidScalarWhereInput | RaidScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type LootUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput> | LootCreateWithoutUsersInput[] | LootUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LootCreateOrConnectWithoutUsersInput | LootCreateOrConnectWithoutUsersInput[]
    upsert?: LootUpsertWithWhereUniqueWithoutUsersInput | LootUpsertWithWhereUniqueWithoutUsersInput[]
    set?: LootWhereUniqueInput | LootWhereUniqueInput[]
    disconnect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    delete?: LootWhereUniqueInput | LootWhereUniqueInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    update?: LootUpdateWithWhereUniqueWithoutUsersInput | LootUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LootUpdateManyWithWhereWithoutUsersInput | LootUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LootScalarWhereInput | LootScalarWhereInput[]
  }

  export type WishlistItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutUserInput | WishlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutUserInput | WishlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutUserInput | WishlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type RaidPointsUpdateOneWithoutUserNestedInput = {
    create?: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
    connectOrCreate?: RaidPointsCreateOrConnectWithoutUserInput
    upsert?: RaidPointsUpsertWithoutUserInput
    disconnect?: RaidPointsWhereInput | boolean
    delete?: RaidPointsWhereInput | boolean
    connect?: RaidPointsWhereUniqueInput
    update?: XOR<XOR<RaidPointsUpdateToOneWithWhereWithoutUserInput, RaidPointsUpdateWithoutUserInput>, RaidPointsUncheckedUpdateWithoutUserInput>
  }

  export type LootHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput> | LootHistoryCreateWithoutUserInput[] | LootHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutUserInput | LootHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutUserInput | LootHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LootHistoryCreateManyUserInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutUserInput | LootHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutUserInput | LootHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type RaidAttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput> | RaidAttendanceCreateWithoutUserInput[] | RaidAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutUserInput | RaidAttendanceCreateOrConnectWithoutUserInput[]
    upsert?: RaidAttendanceUpsertWithWhereUniqueWithoutUserInput | RaidAttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidAttendanceCreateManyUserInputEnvelope
    set?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    disconnect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    delete?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    update?: RaidAttendanceUpdateWithWhereUniqueWithoutUserInput | RaidAttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidAttendanceUpdateManyWithWhereWithoutUserInput | RaidAttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
  }

  export type ClasseUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ClasseCreateWithoutUsersInput, ClasseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutUsersInput
    upsert?: ClasseUpsertWithoutUsersInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutUsersInput, ClasseUpdateWithoutUsersInput>, ClasseUncheckedUpdateWithoutUsersInput>
  }

  export type SpecialisationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SpecialisationCreateWithoutUsersInput, SpecialisationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SpecialisationCreateOrConnectWithoutUsersInput
    upsert?: SpecialisationUpsertWithoutUsersInput
    connect?: SpecialisationWhereUniqueInput
    update?: XOR<XOR<SpecialisationUpdateToOneWithWhereWithoutUsersInput, SpecialisationUpdateWithoutUsersInput>, SpecialisationUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RaidUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput> | RaidCreateWithoutCreatedByInput[] | RaidUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RaidCreateOrConnectWithoutCreatedByInput | RaidCreateOrConnectWithoutCreatedByInput[]
    upsert?: RaidUpsertWithWhereUniqueWithoutCreatedByInput | RaidUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RaidCreateManyCreatedByInputEnvelope
    set?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    disconnect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    delete?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    connect?: RaidWhereUniqueInput | RaidWhereUniqueInput[]
    update?: RaidUpdateWithWhereUniqueWithoutCreatedByInput | RaidUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RaidUpdateManyWithWhereWithoutCreatedByInput | RaidUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RaidScalarWhereInput | RaidScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type LootUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput> | LootCreateWithoutUsersInput[] | LootUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LootCreateOrConnectWithoutUsersInput | LootCreateOrConnectWithoutUsersInput[]
    upsert?: LootUpsertWithWhereUniqueWithoutUsersInput | LootUpsertWithWhereUniqueWithoutUsersInput[]
    set?: LootWhereUniqueInput | LootWhereUniqueInput[]
    disconnect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    delete?: LootWhereUniqueInput | LootWhereUniqueInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    update?: LootUpdateWithWhereUniqueWithoutUsersInput | LootUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LootUpdateManyWithWhereWithoutUsersInput | LootUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LootScalarWhereInput | LootScalarWhereInput[]
  }

  export type WishlistItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutUserInput | WishlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutUserInput | WishlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutUserInput | WishlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type RaidPointsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
    connectOrCreate?: RaidPointsCreateOrConnectWithoutUserInput
    upsert?: RaidPointsUpsertWithoutUserInput
    disconnect?: RaidPointsWhereInput | boolean
    delete?: RaidPointsWhereInput | boolean
    connect?: RaidPointsWhereUniqueInput
    update?: XOR<XOR<RaidPointsUpdateToOneWithWhereWithoutUserInput, RaidPointsUpdateWithoutUserInput>, RaidPointsUncheckedUpdateWithoutUserInput>
  }

  export type LootHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput> | LootHistoryCreateWithoutUserInput[] | LootHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutUserInput | LootHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutUserInput | LootHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LootHistoryCreateManyUserInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutUserInput | LootHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutUserInput | LootHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput> | RaidAttendanceCreateWithoutUserInput[] | RaidAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutUserInput | RaidAttendanceCreateOrConnectWithoutUserInput[]
    upsert?: RaidAttendanceUpsertWithWhereUniqueWithoutUserInput | RaidAttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidAttendanceCreateManyUserInputEnvelope
    set?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    disconnect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    delete?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    update?: RaidAttendanceUpdateWithWhereUniqueWithoutUserInput | RaidAttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidAttendanceUpdateManyWithWhereWithoutUserInput | RaidAttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
  }

  export type SpecialisationCreateNestedManyWithoutClasseInput = {
    create?: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput> | SpecialisationCreateWithoutClasseInput[] | SpecialisationUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: SpecialisationCreateOrConnectWithoutClasseInput | SpecialisationCreateOrConnectWithoutClasseInput[]
    createMany?: SpecialisationCreateManyClasseInputEnvelope
    connect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClasseInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecialisationUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput> | SpecialisationCreateWithoutClasseInput[] | SpecialisationUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: SpecialisationCreateOrConnectWithoutClasseInput | SpecialisationCreateOrConnectWithoutClasseInput[]
    createMany?: SpecialisationCreateManyClasseInputEnvelope
    connect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecialisationUpdateManyWithoutClasseNestedInput = {
    create?: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput> | SpecialisationCreateWithoutClasseInput[] | SpecialisationUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: SpecialisationCreateOrConnectWithoutClasseInput | SpecialisationCreateOrConnectWithoutClasseInput[]
    upsert?: SpecialisationUpsertWithWhereUniqueWithoutClasseInput | SpecialisationUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: SpecialisationCreateManyClasseInputEnvelope
    set?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    disconnect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    delete?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    connect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    update?: SpecialisationUpdateWithWhereUniqueWithoutClasseInput | SpecialisationUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: SpecialisationUpdateManyWithWhereWithoutClasseInput | SpecialisationUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: SpecialisationScalarWhereInput | SpecialisationScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClasseNestedInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClasseInput | UserUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClasseInput | UserUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClasseInput | UserUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpecialisationUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput> | SpecialisationCreateWithoutClasseInput[] | SpecialisationUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: SpecialisationCreateOrConnectWithoutClasseInput | SpecialisationCreateOrConnectWithoutClasseInput[]
    upsert?: SpecialisationUpsertWithWhereUniqueWithoutClasseInput | SpecialisationUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: SpecialisationCreateManyClasseInputEnvelope
    set?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    disconnect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    delete?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    connect?: SpecialisationWhereUniqueInput | SpecialisationWhereUniqueInput[]
    update?: SpecialisationUpdateWithWhereUniqueWithoutClasseInput | SpecialisationUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: SpecialisationUpdateManyWithWhereWithoutClasseInput | SpecialisationUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: SpecialisationScalarWhereInput | SpecialisationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClasseInput | UserUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClasseInput | UserUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClasseInput | UserUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClasseCreateNestedOneWithoutSpecialisationInput = {
    create?: XOR<ClasseCreateWithoutSpecialisationInput, ClasseUncheckedCreateWithoutSpecialisationInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutSpecialisationInput
    connect?: ClasseWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSpecialisationInput = {
    create?: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput> | UserCreateWithoutSpecialisationInput[] | UserUncheckedCreateWithoutSpecialisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialisationInput | UserCreateOrConnectWithoutSpecialisationInput[]
    createMany?: UserCreateManySpecialisationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSpecialisationInput = {
    create?: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput> | UserCreateWithoutSpecialisationInput[] | UserUncheckedCreateWithoutSpecialisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialisationInput | UserCreateOrConnectWithoutSpecialisationInput[]
    createMany?: UserCreateManySpecialisationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClasseUpdateOneRequiredWithoutSpecialisationNestedInput = {
    create?: XOR<ClasseCreateWithoutSpecialisationInput, ClasseUncheckedCreateWithoutSpecialisationInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutSpecialisationInput
    upsert?: ClasseUpsertWithoutSpecialisationInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutSpecialisationInput, ClasseUpdateWithoutSpecialisationInput>, ClasseUncheckedUpdateWithoutSpecialisationInput>
  }

  export type UserUpdateManyWithoutSpecialisationNestedInput = {
    create?: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput> | UserCreateWithoutSpecialisationInput[] | UserUncheckedCreateWithoutSpecialisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialisationInput | UserCreateOrConnectWithoutSpecialisationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialisationInput | UserUpsertWithWhereUniqueWithoutSpecialisationInput[]
    createMany?: UserCreateManySpecialisationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialisationInput | UserUpdateWithWhereUniqueWithoutSpecialisationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialisationInput | UserUpdateManyWithWhereWithoutSpecialisationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSpecialisationNestedInput = {
    create?: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput> | UserCreateWithoutSpecialisationInput[] | UserUncheckedCreateWithoutSpecialisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialisationInput | UserCreateOrConnectWithoutSpecialisationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialisationInput | UserUpsertWithWhereUniqueWithoutSpecialisationInput[]
    createMany?: UserCreateManySpecialisationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialisationInput | UserUpdateWithWhereUniqueWithoutSpecialisationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialisationInput | UserUpdateManyWithWhereWithoutSpecialisationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRaidsInput = {
    create?: XOR<UserCreateWithoutCreatedRaidsInput, UserUncheckedCreateWithoutCreatedRaidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRaidsInput
    connect?: UserWhereUniqueInput
  }

  export type RaidPointsCreateNestedManyWithoutRaidInput = {
    create?: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput> | RaidPointsCreateWithoutRaidInput[] | RaidPointsUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidPointsCreateOrConnectWithoutRaidInput | RaidPointsCreateOrConnectWithoutRaidInput[]
    createMany?: RaidPointsCreateManyRaidInputEnvelope
    connect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
  }

  export type LootHistoryCreateNestedManyWithoutRaidInput = {
    create?: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput> | LootHistoryCreateWithoutRaidInput[] | LootHistoryUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutRaidInput | LootHistoryCreateOrConnectWithoutRaidInput[]
    createMany?: LootHistoryCreateManyRaidInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type RaidAttendanceCreateNestedManyWithoutRaidInput = {
    create?: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput> | RaidAttendanceCreateWithoutRaidInput[] | RaidAttendanceUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutRaidInput | RaidAttendanceCreateOrConnectWithoutRaidInput[]
    createMany?: RaidAttendanceCreateManyRaidInputEnvelope
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRaidInput = {
    create?: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput> | UserCreateWithoutRaidInput[] | UserUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRaidInput | UserCreateOrConnectWithoutRaidInput[]
    createMany?: UserCreateManyRaidInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutRaidInput = {
    create?: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput> | JoinRequestCreateWithoutRaidInput[] | JoinRequestUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutRaidInput | JoinRequestCreateOrConnectWithoutRaidInput[]
    createMany?: JoinRequestCreateManyRaidInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type RaidPointsUncheckedCreateNestedManyWithoutRaidInput = {
    create?: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput> | RaidPointsCreateWithoutRaidInput[] | RaidPointsUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidPointsCreateOrConnectWithoutRaidInput | RaidPointsCreateOrConnectWithoutRaidInput[]
    createMany?: RaidPointsCreateManyRaidInputEnvelope
    connect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
  }

  export type LootHistoryUncheckedCreateNestedManyWithoutRaidInput = {
    create?: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput> | LootHistoryCreateWithoutRaidInput[] | LootHistoryUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutRaidInput | LootHistoryCreateOrConnectWithoutRaidInput[]
    createMany?: LootHistoryCreateManyRaidInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput = {
    create?: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput> | RaidAttendanceCreateWithoutRaidInput[] | RaidAttendanceUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutRaidInput | RaidAttendanceCreateOrConnectWithoutRaidInput[]
    createMany?: RaidAttendanceCreateManyRaidInputEnvelope
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRaidInput = {
    create?: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput> | UserCreateWithoutRaidInput[] | UserUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRaidInput | UserCreateOrConnectWithoutRaidInput[]
    createMany?: UserCreateManyRaidInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutRaidInput = {
    create?: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput> | JoinRequestCreateWithoutRaidInput[] | JoinRequestUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutRaidInput | JoinRequestCreateOrConnectWithoutRaidInput[]
    createMany?: JoinRequestCreateManyRaidInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRaidsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRaidsInput, UserUncheckedCreateWithoutCreatedRaidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRaidsInput
    upsert?: UserUpsertWithoutCreatedRaidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRaidsInput, UserUpdateWithoutCreatedRaidsInput>, UserUncheckedUpdateWithoutCreatedRaidsInput>
  }

  export type RaidPointsUpdateManyWithoutRaidNestedInput = {
    create?: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput> | RaidPointsCreateWithoutRaidInput[] | RaidPointsUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidPointsCreateOrConnectWithoutRaidInput | RaidPointsCreateOrConnectWithoutRaidInput[]
    upsert?: RaidPointsUpsertWithWhereUniqueWithoutRaidInput | RaidPointsUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: RaidPointsCreateManyRaidInputEnvelope
    set?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    disconnect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    delete?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    connect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    update?: RaidPointsUpdateWithWhereUniqueWithoutRaidInput | RaidPointsUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: RaidPointsUpdateManyWithWhereWithoutRaidInput | RaidPointsUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: RaidPointsScalarWhereInput | RaidPointsScalarWhereInput[]
  }

  export type LootHistoryUpdateManyWithoutRaidNestedInput = {
    create?: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput> | LootHistoryCreateWithoutRaidInput[] | LootHistoryUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutRaidInput | LootHistoryCreateOrConnectWithoutRaidInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutRaidInput | LootHistoryUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: LootHistoryCreateManyRaidInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutRaidInput | LootHistoryUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutRaidInput | LootHistoryUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type RaidAttendanceUpdateManyWithoutRaidNestedInput = {
    create?: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput> | RaidAttendanceCreateWithoutRaidInput[] | RaidAttendanceUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutRaidInput | RaidAttendanceCreateOrConnectWithoutRaidInput[]
    upsert?: RaidAttendanceUpsertWithWhereUniqueWithoutRaidInput | RaidAttendanceUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: RaidAttendanceCreateManyRaidInputEnvelope
    set?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    disconnect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    delete?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    update?: RaidAttendanceUpdateWithWhereUniqueWithoutRaidInput | RaidAttendanceUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: RaidAttendanceUpdateManyWithWhereWithoutRaidInput | RaidAttendanceUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRaidNestedInput = {
    create?: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput> | UserCreateWithoutRaidInput[] | UserUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRaidInput | UserCreateOrConnectWithoutRaidInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRaidInput | UserUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: UserCreateManyRaidInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRaidInput | UserUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRaidInput | UserUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutRaidNestedInput = {
    create?: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput> | JoinRequestCreateWithoutRaidInput[] | JoinRequestUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutRaidInput | JoinRequestCreateOrConnectWithoutRaidInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutRaidInput | JoinRequestUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: JoinRequestCreateManyRaidInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutRaidInput | JoinRequestUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutRaidInput | JoinRequestUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type RaidPointsUncheckedUpdateManyWithoutRaidNestedInput = {
    create?: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput> | RaidPointsCreateWithoutRaidInput[] | RaidPointsUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidPointsCreateOrConnectWithoutRaidInput | RaidPointsCreateOrConnectWithoutRaidInput[]
    upsert?: RaidPointsUpsertWithWhereUniqueWithoutRaidInput | RaidPointsUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: RaidPointsCreateManyRaidInputEnvelope
    set?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    disconnect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    delete?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    connect?: RaidPointsWhereUniqueInput | RaidPointsWhereUniqueInput[]
    update?: RaidPointsUpdateWithWhereUniqueWithoutRaidInput | RaidPointsUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: RaidPointsUpdateManyWithWhereWithoutRaidInput | RaidPointsUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: RaidPointsScalarWhereInput | RaidPointsScalarWhereInput[]
  }

  export type LootHistoryUncheckedUpdateManyWithoutRaidNestedInput = {
    create?: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput> | LootHistoryCreateWithoutRaidInput[] | LootHistoryUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutRaidInput | LootHistoryCreateOrConnectWithoutRaidInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutRaidInput | LootHistoryUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: LootHistoryCreateManyRaidInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutRaidInput | LootHistoryUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutRaidInput | LootHistoryUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput = {
    create?: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput> | RaidAttendanceCreateWithoutRaidInput[] | RaidAttendanceUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: RaidAttendanceCreateOrConnectWithoutRaidInput | RaidAttendanceCreateOrConnectWithoutRaidInput[]
    upsert?: RaidAttendanceUpsertWithWhereUniqueWithoutRaidInput | RaidAttendanceUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: RaidAttendanceCreateManyRaidInputEnvelope
    set?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    disconnect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    delete?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    connect?: RaidAttendanceWhereUniqueInput | RaidAttendanceWhereUniqueInput[]
    update?: RaidAttendanceUpdateWithWhereUniqueWithoutRaidInput | RaidAttendanceUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: RaidAttendanceUpdateManyWithWhereWithoutRaidInput | RaidAttendanceUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRaidNestedInput = {
    create?: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput> | UserCreateWithoutRaidInput[] | UserUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRaidInput | UserCreateOrConnectWithoutRaidInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRaidInput | UserUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: UserCreateManyRaidInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRaidInput | UserUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRaidInput | UserUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutRaidNestedInput = {
    create?: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput> | JoinRequestCreateWithoutRaidInput[] | JoinRequestUncheckedCreateWithoutRaidInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutRaidInput | JoinRequestCreateOrConnectWithoutRaidInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutRaidInput | JoinRequestUpsertWithWhereUniqueWithoutRaidInput[]
    createMany?: JoinRequestCreateManyRaidInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutRaidInput | JoinRequestUpdateWithWhereUniqueWithoutRaidInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutRaidInput | JoinRequestUpdateManyWithWhereWithoutRaidInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type RaidCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<RaidCreateWithoutJoinRequestsInput, RaidUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: RaidCreateOrConnectWithoutJoinRequestsInput
    connect?: RaidWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    upsert?: UserUpsertWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinRequestsInput, UserUpdateWithoutJoinRequestsInput>, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type RaidUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<RaidCreateWithoutJoinRequestsInput, RaidUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: RaidCreateOrConnectWithoutJoinRequestsInput
    upsert?: RaidUpsertWithoutJoinRequestsInput
    connect?: RaidWhereUniqueInput
    update?: XOR<XOR<RaidUpdateToOneWithWhereWithoutJoinRequestsInput, RaidUpdateWithoutJoinRequestsInput>, RaidUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserCreateNestedOneWithoutRaidPointsInput = {
    create?: XOR<UserCreateWithoutRaidPointsInput, UserUncheckedCreateWithoutRaidPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidPointsInput
    connect?: UserWhereUniqueInput
  }

  export type RaidCreateNestedOneWithoutRaidPointsInput = {
    create?: XOR<RaidCreateWithoutRaidPointsInput, RaidUncheckedCreateWithoutRaidPointsInput>
    connectOrCreate?: RaidCreateOrConnectWithoutRaidPointsInput
    connect?: RaidWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRaidPointsNestedInput = {
    create?: XOR<UserCreateWithoutRaidPointsInput, UserUncheckedCreateWithoutRaidPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidPointsInput
    upsert?: UserUpsertWithoutRaidPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaidPointsInput, UserUpdateWithoutRaidPointsInput>, UserUncheckedUpdateWithoutRaidPointsInput>
  }

  export type RaidUpdateOneRequiredWithoutRaidPointsNestedInput = {
    create?: XOR<RaidCreateWithoutRaidPointsInput, RaidUncheckedCreateWithoutRaidPointsInput>
    connectOrCreate?: RaidCreateOrConnectWithoutRaidPointsInput
    upsert?: RaidUpsertWithoutRaidPointsInput
    connect?: RaidWhereUniqueInput
    update?: XOR<XOR<RaidUpdateToOneWithWhereWithoutRaidPointsInput, RaidUpdateWithoutRaidPointsInput>, RaidUncheckedUpdateWithoutRaidPointsInput>
  }

  export type UserCreateNestedOneWithoutWishlistItemInput = {
    create?: XOR<UserCreateWithoutWishlistItemInput, UserUncheckedCreateWithoutWishlistItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistItemInput
    connect?: UserWhereUniqueInput
  }

  export type LootCreateNestedOneWithoutWishlistItemInput = {
    create?: XOR<LootCreateWithoutWishlistItemInput, LootUncheckedCreateWithoutWishlistItemInput>
    connectOrCreate?: LootCreateOrConnectWithoutWishlistItemInput
    connect?: LootWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWishlistItemNestedInput = {
    create?: XOR<UserCreateWithoutWishlistItemInput, UserUncheckedCreateWithoutWishlistItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistItemInput
    upsert?: UserUpsertWithoutWishlistItemInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishlistItemInput, UserUpdateWithoutWishlistItemInput>, UserUncheckedUpdateWithoutWishlistItemInput>
  }

  export type LootUpdateOneRequiredWithoutWishlistItemNestedInput = {
    create?: XOR<LootCreateWithoutWishlistItemInput, LootUncheckedCreateWithoutWishlistItemInput>
    connectOrCreate?: LootCreateOrConnectWithoutWishlistItemInput
    upsert?: LootUpsertWithoutWishlistItemInput
    connect?: LootWhereUniqueInput
    update?: XOR<XOR<LootUpdateToOneWithWhereWithoutWishlistItemInput, LootUpdateWithoutWishlistItemInput>, LootUncheckedUpdateWithoutWishlistItemInput>
  }

  export type UserCreateNestedOneWithoutLootHistoryInput = {
    create?: XOR<UserCreateWithoutLootHistoryInput, UserUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLootHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type LootCreateNestedOneWithoutLootHistoryInput = {
    create?: XOR<LootCreateWithoutLootHistoryInput, LootUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: LootCreateOrConnectWithoutLootHistoryInput
    connect?: LootWhereUniqueInput
  }

  export type RaidCreateNestedOneWithoutLootHistoryInput = {
    create?: XOR<RaidCreateWithoutLootHistoryInput, RaidUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: RaidCreateOrConnectWithoutLootHistoryInput
    connect?: RaidWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLootHistoryNestedInput = {
    create?: XOR<UserCreateWithoutLootHistoryInput, UserUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLootHistoryInput
    upsert?: UserUpsertWithoutLootHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLootHistoryInput, UserUpdateWithoutLootHistoryInput>, UserUncheckedUpdateWithoutLootHistoryInput>
  }

  export type LootUpdateOneRequiredWithoutLootHistoryNestedInput = {
    create?: XOR<LootCreateWithoutLootHistoryInput, LootUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: LootCreateOrConnectWithoutLootHistoryInput
    upsert?: LootUpsertWithoutLootHistoryInput
    connect?: LootWhereUniqueInput
    update?: XOR<XOR<LootUpdateToOneWithWhereWithoutLootHistoryInput, LootUpdateWithoutLootHistoryInput>, LootUncheckedUpdateWithoutLootHistoryInput>
  }

  export type RaidUpdateOneRequiredWithoutLootHistoryNestedInput = {
    create?: XOR<RaidCreateWithoutLootHistoryInput, RaidUncheckedCreateWithoutLootHistoryInput>
    connectOrCreate?: RaidCreateOrConnectWithoutLootHistoryInput
    upsert?: RaidUpsertWithoutLootHistoryInput
    connect?: RaidWhereUniqueInput
    update?: XOR<XOR<RaidUpdateToOneWithWhereWithoutLootHistoryInput, RaidUpdateWithoutLootHistoryInput>, RaidUncheckedUpdateWithoutLootHistoryInput>
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type RaidCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<RaidCreateWithoutAttendancesInput, RaidUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: RaidCreateOrConnectWithoutAttendancesInput
    connect?: RaidWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type RaidUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<RaidCreateWithoutAttendancesInput, RaidUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: RaidCreateOrConnectWithoutAttendancesInput
    upsert?: RaidUpsertWithoutAttendancesInput
    connect?: RaidWhereUniqueInput
    update?: XOR<XOR<RaidUpdateToOneWithWhereWithoutAttendancesInput, RaidUpdateWithoutAttendancesInput>, RaidUncheckedUpdateWithoutAttendancesInput>
  }

  export type LootCreateNestedManyWithoutBossInput = {
    create?: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput> | LootCreateWithoutBossInput[] | LootUncheckedCreateWithoutBossInput[]
    connectOrCreate?: LootCreateOrConnectWithoutBossInput | LootCreateOrConnectWithoutBossInput[]
    createMany?: LootCreateManyBossInputEnvelope
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
  }

  export type LootUncheckedCreateNestedManyWithoutBossInput = {
    create?: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput> | LootCreateWithoutBossInput[] | LootUncheckedCreateWithoutBossInput[]
    connectOrCreate?: LootCreateOrConnectWithoutBossInput | LootCreateOrConnectWithoutBossInput[]
    createMany?: LootCreateManyBossInputEnvelope
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
  }

  export type LootUpdateManyWithoutBossNestedInput = {
    create?: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput> | LootCreateWithoutBossInput[] | LootUncheckedCreateWithoutBossInput[]
    connectOrCreate?: LootCreateOrConnectWithoutBossInput | LootCreateOrConnectWithoutBossInput[]
    upsert?: LootUpsertWithWhereUniqueWithoutBossInput | LootUpsertWithWhereUniqueWithoutBossInput[]
    createMany?: LootCreateManyBossInputEnvelope
    set?: LootWhereUniqueInput | LootWhereUniqueInput[]
    disconnect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    delete?: LootWhereUniqueInput | LootWhereUniqueInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    update?: LootUpdateWithWhereUniqueWithoutBossInput | LootUpdateWithWhereUniqueWithoutBossInput[]
    updateMany?: LootUpdateManyWithWhereWithoutBossInput | LootUpdateManyWithWhereWithoutBossInput[]
    deleteMany?: LootScalarWhereInput | LootScalarWhereInput[]
  }

  export type LootUncheckedUpdateManyWithoutBossNestedInput = {
    create?: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput> | LootCreateWithoutBossInput[] | LootUncheckedCreateWithoutBossInput[]
    connectOrCreate?: LootCreateOrConnectWithoutBossInput | LootCreateOrConnectWithoutBossInput[]
    upsert?: LootUpsertWithWhereUniqueWithoutBossInput | LootUpsertWithWhereUniqueWithoutBossInput[]
    createMany?: LootCreateManyBossInputEnvelope
    set?: LootWhereUniqueInput | LootWhereUniqueInput[]
    disconnect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    delete?: LootWhereUniqueInput | LootWhereUniqueInput[]
    connect?: LootWhereUniqueInput | LootWhereUniqueInput[]
    update?: LootUpdateWithWhereUniqueWithoutBossInput | LootUpdateWithWhereUniqueWithoutBossInput[]
    updateMany?: LootUpdateManyWithWhereWithoutBossInput | LootUpdateManyWithWhereWithoutBossInput[]
    deleteMany?: LootScalarWhereInput | LootScalarWhereInput[]
  }

  export type BossCreateNestedOneWithoutLootsInput = {
    create?: XOR<BossCreateWithoutLootsInput, BossUncheckedCreateWithoutLootsInput>
    connectOrCreate?: BossCreateOrConnectWithoutLootsInput
    connect?: BossWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLootsInput = {
    create?: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput> | UserCreateWithoutLootsInput[] | UserUncheckedCreateWithoutLootsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLootsInput | UserCreateOrConnectWithoutLootsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WishlistItemCreateNestedManyWithoutLootInput = {
    create?: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput> | WishlistItemCreateWithoutLootInput[] | WishlistItemUncheckedCreateWithoutLootInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutLootInput | WishlistItemCreateOrConnectWithoutLootInput[]
    createMany?: WishlistItemCreateManyLootInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type LootHistoryCreateNestedManyWithoutLootInput = {
    create?: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput> | LootHistoryCreateWithoutLootInput[] | LootHistoryUncheckedCreateWithoutLootInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutLootInput | LootHistoryCreateOrConnectWithoutLootInput[]
    createMany?: LootHistoryCreateManyLootInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLootsInput = {
    create?: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput> | UserCreateWithoutLootsInput[] | UserUncheckedCreateWithoutLootsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLootsInput | UserCreateOrConnectWithoutLootsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WishlistItemUncheckedCreateNestedManyWithoutLootInput = {
    create?: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput> | WishlistItemCreateWithoutLootInput[] | WishlistItemUncheckedCreateWithoutLootInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutLootInput | WishlistItemCreateOrConnectWithoutLootInput[]
    createMany?: WishlistItemCreateManyLootInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type LootHistoryUncheckedCreateNestedManyWithoutLootInput = {
    create?: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput> | LootHistoryCreateWithoutLootInput[] | LootHistoryUncheckedCreateWithoutLootInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutLootInput | LootHistoryCreateOrConnectWithoutLootInput[]
    createMany?: LootHistoryCreateManyLootInputEnvelope
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
  }

  export type BossUpdateOneRequiredWithoutLootsNestedInput = {
    create?: XOR<BossCreateWithoutLootsInput, BossUncheckedCreateWithoutLootsInput>
    connectOrCreate?: BossCreateOrConnectWithoutLootsInput
    upsert?: BossUpsertWithoutLootsInput
    connect?: BossWhereUniqueInput
    update?: XOR<XOR<BossUpdateToOneWithWhereWithoutLootsInput, BossUpdateWithoutLootsInput>, BossUncheckedUpdateWithoutLootsInput>
  }

  export type UserUpdateManyWithoutLootsNestedInput = {
    create?: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput> | UserCreateWithoutLootsInput[] | UserUncheckedCreateWithoutLootsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLootsInput | UserCreateOrConnectWithoutLootsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLootsInput | UserUpsertWithWhereUniqueWithoutLootsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLootsInput | UserUpdateWithWhereUniqueWithoutLootsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLootsInput | UserUpdateManyWithWhereWithoutLootsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WishlistItemUpdateManyWithoutLootNestedInput = {
    create?: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput> | WishlistItemCreateWithoutLootInput[] | WishlistItemUncheckedCreateWithoutLootInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutLootInput | WishlistItemCreateOrConnectWithoutLootInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutLootInput | WishlistItemUpsertWithWhereUniqueWithoutLootInput[]
    createMany?: WishlistItemCreateManyLootInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutLootInput | WishlistItemUpdateWithWhereUniqueWithoutLootInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutLootInput | WishlistItemUpdateManyWithWhereWithoutLootInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type LootHistoryUpdateManyWithoutLootNestedInput = {
    create?: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput> | LootHistoryCreateWithoutLootInput[] | LootHistoryUncheckedCreateWithoutLootInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutLootInput | LootHistoryCreateOrConnectWithoutLootInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutLootInput | LootHistoryUpsertWithWhereUniqueWithoutLootInput[]
    createMany?: LootHistoryCreateManyLootInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutLootInput | LootHistoryUpdateWithWhereUniqueWithoutLootInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutLootInput | LootHistoryUpdateManyWithWhereWithoutLootInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLootsNestedInput = {
    create?: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput> | UserCreateWithoutLootsInput[] | UserUncheckedCreateWithoutLootsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLootsInput | UserCreateOrConnectWithoutLootsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLootsInput | UserUpsertWithWhereUniqueWithoutLootsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLootsInput | UserUpdateWithWhereUniqueWithoutLootsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLootsInput | UserUpdateManyWithWhereWithoutLootsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WishlistItemUncheckedUpdateManyWithoutLootNestedInput = {
    create?: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput> | WishlistItemCreateWithoutLootInput[] | WishlistItemUncheckedCreateWithoutLootInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutLootInput | WishlistItemCreateOrConnectWithoutLootInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutLootInput | WishlistItemUpsertWithWhereUniqueWithoutLootInput[]
    createMany?: WishlistItemCreateManyLootInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutLootInput | WishlistItemUpdateWithWhereUniqueWithoutLootInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutLootInput | WishlistItemUpdateManyWithWhereWithoutLootInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type LootHistoryUncheckedUpdateManyWithoutLootNestedInput = {
    create?: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput> | LootHistoryCreateWithoutLootInput[] | LootHistoryUncheckedCreateWithoutLootInput[]
    connectOrCreate?: LootHistoryCreateOrConnectWithoutLootInput | LootHistoryCreateOrConnectWithoutLootInput[]
    upsert?: LootHistoryUpsertWithWhereUniqueWithoutLootInput | LootHistoryUpsertWithWhereUniqueWithoutLootInput[]
    createMany?: LootHistoryCreateManyLootInputEnvelope
    set?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    disconnect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    delete?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    connect?: LootHistoryWhereUniqueInput | LootHistoryWhereUniqueInput[]
    update?: LootHistoryUpdateWithWhereUniqueWithoutLootInput | LootHistoryUpdateWithWhereUniqueWithoutLootInput[]
    updateMany?: LootHistoryUpdateManyWithWhereWithoutLootInput | LootHistoryUpdateManyWithWhereWithoutLootInput[]
    deleteMany?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RaidCreateWithoutUsersInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdById: number
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutUsersInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutUsersInput, RaidUncheckedCreateWithoutUsersInput>
  }

  export type RaidCreateWithoutCreatedByInput = {
    name: string
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutCreatedByInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput>
  }

  export type RaidCreateManyCreatedByInputEnvelope = {
    data: RaidCreateManyCreatedByInput | RaidCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type JoinRequestCreateWithoutUserInput = {
    status?: string
    createdAt?: Date | string
    raid: RaidCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutUserInput = {
    id?: number
    raidId: number
    status?: string
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestCreateManyUserInputEnvelope = {
    data: JoinRequestCreateManyUserInput | JoinRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LootCreateWithoutUsersInput = {
    name: string
    url: string
    boss: BossCreateNestedOneWithoutLootsInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryCreateNestedManyWithoutLootInput
  }

  export type LootUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    url: string
    bossId: number
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutLootInput
  }

  export type LootCreateOrConnectWithoutUsersInput = {
    where: LootWhereUniqueInput
    create: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput>
  }

  export type WishlistItemCreateWithoutUserInput = {
    priority: number
    createdAt?: Date | string
    loot: LootCreateNestedOneWithoutWishlistItemInput
  }

  export type WishlistItemUncheckedCreateWithoutUserInput = {
    id?: number
    lootId: number
    priority: number
    createdAt?: Date | string
  }

  export type WishlistItemCreateOrConnectWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    create: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput>
  }

  export type WishlistItemCreateManyUserInputEnvelope = {
    data: WishlistItemCreateManyUserInput | WishlistItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RaidPointsCreateWithoutUserInput = {
    points?: number
    raid: RaidCreateNestedOneWithoutRaidPointsInput
  }

  export type RaidPointsUncheckedCreateWithoutUserInput = {
    id?: number
    raidId: number
    points?: number
  }

  export type RaidPointsCreateOrConnectWithoutUserInput = {
    where: RaidPointsWhereUniqueInput
    create: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
  }

  export type LootHistoryCreateWithoutUserInput = {
    priority: number
    pointsCost: number
    createdAt?: Date | string
    loot: LootCreateNestedOneWithoutLootHistoryInput
    raid: RaidCreateNestedOneWithoutLootHistoryInput
  }

  export type LootHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type LootHistoryCreateOrConnectWithoutUserInput = {
    where: LootHistoryWhereUniqueInput
    create: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput>
  }

  export type LootHistoryCreateManyUserInputEnvelope = {
    data: LootHistoryCreateManyUserInput | LootHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RaidAttendanceCreateWithoutUserInput = {
    pointsGiven?: number
    createdAt?: Date | string
    raid: RaidCreateNestedOneWithoutAttendancesInput
  }

  export type RaidAttendanceUncheckedCreateWithoutUserInput = {
    id?: number
    raidId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type RaidAttendanceCreateOrConnectWithoutUserInput = {
    where: RaidAttendanceWhereUniqueInput
    create: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput>
  }

  export type RaidAttendanceCreateManyUserInputEnvelope = {
    data: RaidAttendanceCreateManyUserInput | RaidAttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClasseCreateWithoutUsersInput = {
    name: string
    specialisation?: SpecialisationCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    specialisation?: SpecialisationUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseCreateOrConnectWithoutUsersInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutUsersInput, ClasseUncheckedCreateWithoutUsersInput>
  }

  export type SpecialisationCreateWithoutUsersInput = {
    name: string
    classe: ClasseCreateNestedOneWithoutSpecialisationInput
  }

  export type SpecialisationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    classeId: number
  }

  export type SpecialisationCreateOrConnectWithoutUsersInput = {
    where: SpecialisationWhereUniqueInput
    create: XOR<SpecialisationCreateWithoutUsersInput, SpecialisationUncheckedCreateWithoutUsersInput>
  }

  export type RaidUpsertWithoutUsersInput = {
    update: XOR<RaidUpdateWithoutUsersInput, RaidUncheckedUpdateWithoutUsersInput>
    create: XOR<RaidCreateWithoutUsersInput, RaidUncheckedCreateWithoutUsersInput>
    where?: RaidWhereInput
  }

  export type RaidUpdateToOneWithWhereWithoutUsersInput = {
    where?: RaidWhereInput
    data: XOR<RaidUpdateWithoutUsersInput, RaidUncheckedUpdateWithoutUsersInput>
  }

  export type RaidUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type RaidUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RaidWhereUniqueInput
    update: XOR<RaidUpdateWithoutCreatedByInput, RaidUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RaidCreateWithoutCreatedByInput, RaidUncheckedCreateWithoutCreatedByInput>
  }

  export type RaidUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RaidWhereUniqueInput
    data: XOR<RaidUpdateWithoutCreatedByInput, RaidUncheckedUpdateWithoutCreatedByInput>
  }

  export type RaidUpdateManyWithWhereWithoutCreatedByInput = {
    where: RaidScalarWhereInput
    data: XOR<RaidUpdateManyMutationInput, RaidUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RaidScalarWhereInput = {
    AND?: RaidScalarWhereInput | RaidScalarWhereInput[]
    OR?: RaidScalarWhereInput[]
    NOT?: RaidScalarWhereInput | RaidScalarWhereInput[]
    id?: IntFilter<"Raid"> | number
    name?: StringFilter<"Raid"> | string
    createdById?: IntFilter<"Raid"> | number
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinRequestScalarWhereInput = {
    AND?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    OR?: JoinRequestScalarWhereInput[]
    NOT?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    id?: IntFilter<"JoinRequest"> | number
    userId?: IntFilter<"JoinRequest"> | number
    raidId?: IntFilter<"JoinRequest"> | number
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
  }

  export type LootUpsertWithWhereUniqueWithoutUsersInput = {
    where: LootWhereUniqueInput
    update: XOR<LootUpdateWithoutUsersInput, LootUncheckedUpdateWithoutUsersInput>
    create: XOR<LootCreateWithoutUsersInput, LootUncheckedCreateWithoutUsersInput>
  }

  export type LootUpdateWithWhereUniqueWithoutUsersInput = {
    where: LootWhereUniqueInput
    data: XOR<LootUpdateWithoutUsersInput, LootUncheckedUpdateWithoutUsersInput>
  }

  export type LootUpdateManyWithWhereWithoutUsersInput = {
    where: LootScalarWhereInput
    data: XOR<LootUpdateManyMutationInput, LootUncheckedUpdateManyWithoutUsersInput>
  }

  export type LootScalarWhereInput = {
    AND?: LootScalarWhereInput | LootScalarWhereInput[]
    OR?: LootScalarWhereInput[]
    NOT?: LootScalarWhereInput | LootScalarWhereInput[]
    id?: IntFilter<"Loot"> | number
    name?: StringFilter<"Loot"> | string
    url?: StringFilter<"Loot"> | string
    bossId?: IntFilter<"Loot"> | number
  }

  export type WishlistItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    update: XOR<WishlistItemUpdateWithoutUserInput, WishlistItemUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput>
  }

  export type WishlistItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    data: XOR<WishlistItemUpdateWithoutUserInput, WishlistItemUncheckedUpdateWithoutUserInput>
  }

  export type WishlistItemUpdateManyWithWhereWithoutUserInput = {
    where: WishlistItemScalarWhereInput
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistItemScalarWhereInput = {
    AND?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    OR?: WishlistItemScalarWhereInput[]
    NOT?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    id?: IntFilter<"WishlistItem"> | number
    userId?: IntFilter<"WishlistItem"> | number
    lootId?: IntFilter<"WishlistItem"> | number
    priority?: IntFilter<"WishlistItem"> | number
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
  }

  export type RaidPointsUpsertWithoutUserInput = {
    update: XOR<RaidPointsUpdateWithoutUserInput, RaidPointsUncheckedUpdateWithoutUserInput>
    create: XOR<RaidPointsCreateWithoutUserInput, RaidPointsUncheckedCreateWithoutUserInput>
    where?: RaidPointsWhereInput
  }

  export type RaidPointsUpdateToOneWithWhereWithoutUserInput = {
    where?: RaidPointsWhereInput
    data: XOR<RaidPointsUpdateWithoutUserInput, RaidPointsUncheckedUpdateWithoutUserInput>
  }

  export type RaidPointsUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    raid?: RaidUpdateOneRequiredWithoutRaidPointsNestedInput
  }

  export type RaidPointsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type LootHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: LootHistoryWhereUniqueInput
    update: XOR<LootHistoryUpdateWithoutUserInput, LootHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<LootHistoryCreateWithoutUserInput, LootHistoryUncheckedCreateWithoutUserInput>
  }

  export type LootHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: LootHistoryWhereUniqueInput
    data: XOR<LootHistoryUpdateWithoutUserInput, LootHistoryUncheckedUpdateWithoutUserInput>
  }

  export type LootHistoryUpdateManyWithWhereWithoutUserInput = {
    where: LootHistoryScalarWhereInput
    data: XOR<LootHistoryUpdateManyMutationInput, LootHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type LootHistoryScalarWhereInput = {
    AND?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
    OR?: LootHistoryScalarWhereInput[]
    NOT?: LootHistoryScalarWhereInput | LootHistoryScalarWhereInput[]
    id?: IntFilter<"LootHistory"> | number
    userId?: IntFilter<"LootHistory"> | number
    lootId?: IntFilter<"LootHistory"> | number
    raidId?: IntFilter<"LootHistory"> | number
    priority?: IntFilter<"LootHistory"> | number
    pointsCost?: IntFilter<"LootHistory"> | number
    createdAt?: DateTimeFilter<"LootHistory"> | Date | string
  }

  export type RaidAttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: RaidAttendanceWhereUniqueInput
    update: XOR<RaidAttendanceUpdateWithoutUserInput, RaidAttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<RaidAttendanceCreateWithoutUserInput, RaidAttendanceUncheckedCreateWithoutUserInput>
  }

  export type RaidAttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: RaidAttendanceWhereUniqueInput
    data: XOR<RaidAttendanceUpdateWithoutUserInput, RaidAttendanceUncheckedUpdateWithoutUserInput>
  }

  export type RaidAttendanceUpdateManyWithWhereWithoutUserInput = {
    where: RaidAttendanceScalarWhereInput
    data: XOR<RaidAttendanceUpdateManyMutationInput, RaidAttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type RaidAttendanceScalarWhereInput = {
    AND?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
    OR?: RaidAttendanceScalarWhereInput[]
    NOT?: RaidAttendanceScalarWhereInput | RaidAttendanceScalarWhereInput[]
    id?: IntFilter<"RaidAttendance"> | number
    userId?: IntFilter<"RaidAttendance"> | number
    raidId?: IntFilter<"RaidAttendance"> | number
    pointsGiven?: IntFilter<"RaidAttendance"> | number
    createdAt?: DateTimeFilter<"RaidAttendance"> | Date | string
  }

  export type ClasseUpsertWithoutUsersInput = {
    update: XOR<ClasseUpdateWithoutUsersInput, ClasseUncheckedUpdateWithoutUsersInput>
    create: XOR<ClasseCreateWithoutUsersInput, ClasseUncheckedCreateWithoutUsersInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutUsersInput, ClasseUncheckedUpdateWithoutUsersInput>
  }

  export type ClasseUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialisation?: SpecialisationUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialisation?: SpecialisationUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type SpecialisationUpsertWithoutUsersInput = {
    update: XOR<SpecialisationUpdateWithoutUsersInput, SpecialisationUncheckedUpdateWithoutUsersInput>
    create: XOR<SpecialisationCreateWithoutUsersInput, SpecialisationUncheckedCreateWithoutUsersInput>
    where?: SpecialisationWhereInput
  }

  export type SpecialisationUpdateToOneWithWhereWithoutUsersInput = {
    where?: SpecialisationWhereInput
    data: XOR<SpecialisationUpdateWithoutUsersInput, SpecialisationUncheckedUpdateWithoutUsersInput>
  }

  export type SpecialisationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    classe?: ClasseUpdateOneRequiredWithoutSpecialisationNestedInput
  }

  export type SpecialisationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialisationCreateWithoutClasseInput = {
    name: string
    users?: UserCreateNestedManyWithoutSpecialisationInput
  }

  export type SpecialisationUncheckedCreateWithoutClasseInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutSpecialisationInput
  }

  export type SpecialisationCreateOrConnectWithoutClasseInput = {
    where: SpecialisationWhereUniqueInput
    create: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput>
  }

  export type SpecialisationCreateManyClasseInputEnvelope = {
    data: SpecialisationCreateManyClasseInput | SpecialisationCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClasseInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutClasseInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClasseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput>
  }

  export type UserCreateManyClasseInputEnvelope = {
    data: UserCreateManyClasseInput | UserCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type SpecialisationUpsertWithWhereUniqueWithoutClasseInput = {
    where: SpecialisationWhereUniqueInput
    update: XOR<SpecialisationUpdateWithoutClasseInput, SpecialisationUncheckedUpdateWithoutClasseInput>
    create: XOR<SpecialisationCreateWithoutClasseInput, SpecialisationUncheckedCreateWithoutClasseInput>
  }

  export type SpecialisationUpdateWithWhereUniqueWithoutClasseInput = {
    where: SpecialisationWhereUniqueInput
    data: XOR<SpecialisationUpdateWithoutClasseInput, SpecialisationUncheckedUpdateWithoutClasseInput>
  }

  export type SpecialisationUpdateManyWithWhereWithoutClasseInput = {
    where: SpecialisationScalarWhereInput
    data: XOR<SpecialisationUpdateManyMutationInput, SpecialisationUncheckedUpdateManyWithoutClasseInput>
  }

  export type SpecialisationScalarWhereInput = {
    AND?: SpecialisationScalarWhereInput | SpecialisationScalarWhereInput[]
    OR?: SpecialisationScalarWhereInput[]
    NOT?: SpecialisationScalarWhereInput | SpecialisationScalarWhereInput[]
    id?: IntFilter<"Specialisation"> | number
    name?: StringFilter<"Specialisation"> | string
    classeId?: IntFilter<"Specialisation"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutClasseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClasseInput, UserUncheckedUpdateWithoutClasseInput>
    create: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClasseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClasseInput, UserUncheckedUpdateWithoutClasseInput>
  }

  export type UserUpdateManyWithWhereWithoutClasseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClasseInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    classeId?: IntFilter<"User"> | number
    specialisationId?: IntFilter<"User"> | number
    raidId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ClasseCreateWithoutSpecialisationInput = {
    name: string
    users?: UserCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateWithoutSpecialisationInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseCreateOrConnectWithoutSpecialisationInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutSpecialisationInput, ClasseUncheckedCreateWithoutSpecialisationInput>
  }

  export type UserCreateWithoutSpecialisationInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSpecialisationInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpecialisationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput>
  }

  export type UserCreateManySpecialisationInputEnvelope = {
    data: UserCreateManySpecialisationInput | UserCreateManySpecialisationInput[]
    skipDuplicates?: boolean
  }

  export type ClasseUpsertWithoutSpecialisationInput = {
    update: XOR<ClasseUpdateWithoutSpecialisationInput, ClasseUncheckedUpdateWithoutSpecialisationInput>
    create: XOR<ClasseCreateWithoutSpecialisationInput, ClasseUncheckedCreateWithoutSpecialisationInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutSpecialisationInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutSpecialisationInput, ClasseUncheckedUpdateWithoutSpecialisationInput>
  }

  export type ClasseUpdateWithoutSpecialisationInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateWithoutSpecialisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSpecialisationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSpecialisationInput, UserUncheckedUpdateWithoutSpecialisationInput>
    create: XOR<UserCreateWithoutSpecialisationInput, UserUncheckedCreateWithoutSpecialisationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSpecialisationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSpecialisationInput, UserUncheckedUpdateWithoutSpecialisationInput>
  }

  export type UserUpdateManyWithWhereWithoutSpecialisationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSpecialisationInput>
  }

  export type UserCreateWithoutCreatedRaidsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedRaidsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRaidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRaidsInput, UserUncheckedCreateWithoutCreatedRaidsInput>
  }

  export type RaidPointsCreateWithoutRaidInput = {
    points?: number
    user: UserCreateNestedOneWithoutRaidPointsInput
  }

  export type RaidPointsUncheckedCreateWithoutRaidInput = {
    id?: number
    userId: number
    points?: number
  }

  export type RaidPointsCreateOrConnectWithoutRaidInput = {
    where: RaidPointsWhereUniqueInput
    create: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput>
  }

  export type RaidPointsCreateManyRaidInputEnvelope = {
    data: RaidPointsCreateManyRaidInput | RaidPointsCreateManyRaidInput[]
    skipDuplicates?: boolean
  }

  export type LootHistoryCreateWithoutRaidInput = {
    priority: number
    pointsCost: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLootHistoryInput
    loot: LootCreateNestedOneWithoutLootHistoryInput
  }

  export type LootHistoryUncheckedCreateWithoutRaidInput = {
    id?: number
    userId: number
    lootId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type LootHistoryCreateOrConnectWithoutRaidInput = {
    where: LootHistoryWhereUniqueInput
    create: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput>
  }

  export type LootHistoryCreateManyRaidInputEnvelope = {
    data: LootHistoryCreateManyRaidInput | LootHistoryCreateManyRaidInput[]
    skipDuplicates?: boolean
  }

  export type RaidAttendanceCreateWithoutRaidInput = {
    pointsGiven?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type RaidAttendanceUncheckedCreateWithoutRaidInput = {
    id?: number
    userId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type RaidAttendanceCreateOrConnectWithoutRaidInput = {
    where: RaidAttendanceWhereUniqueInput
    create: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput>
  }

  export type RaidAttendanceCreateManyRaidInputEnvelope = {
    data: RaidAttendanceCreateManyRaidInput | RaidAttendanceCreateManyRaidInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRaidInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRaidInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRaidInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput>
  }

  export type UserCreateManyRaidInputEnvelope = {
    data: UserCreateManyRaidInput | UserCreateManyRaidInput[]
    skipDuplicates?: boolean
  }

  export type JoinRequestCreateWithoutRaidInput = {
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutRaidInput = {
    id?: number
    userId: number
    status?: string
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutRaidInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput>
  }

  export type JoinRequestCreateManyRaidInputEnvelope = {
    data: JoinRequestCreateManyRaidInput | JoinRequestCreateManyRaidInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRaidsInput = {
    update: XOR<UserUpdateWithoutCreatedRaidsInput, UserUncheckedUpdateWithoutCreatedRaidsInput>
    create: XOR<UserCreateWithoutCreatedRaidsInput, UserUncheckedCreateWithoutCreatedRaidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRaidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRaidsInput, UserUncheckedUpdateWithoutCreatedRaidsInput>
  }

  export type UserUpdateWithoutCreatedRaidsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRaidsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaidPointsUpsertWithWhereUniqueWithoutRaidInput = {
    where: RaidPointsWhereUniqueInput
    update: XOR<RaidPointsUpdateWithoutRaidInput, RaidPointsUncheckedUpdateWithoutRaidInput>
    create: XOR<RaidPointsCreateWithoutRaidInput, RaidPointsUncheckedCreateWithoutRaidInput>
  }

  export type RaidPointsUpdateWithWhereUniqueWithoutRaidInput = {
    where: RaidPointsWhereUniqueInput
    data: XOR<RaidPointsUpdateWithoutRaidInput, RaidPointsUncheckedUpdateWithoutRaidInput>
  }

  export type RaidPointsUpdateManyWithWhereWithoutRaidInput = {
    where: RaidPointsScalarWhereInput
    data: XOR<RaidPointsUpdateManyMutationInput, RaidPointsUncheckedUpdateManyWithoutRaidInput>
  }

  export type RaidPointsScalarWhereInput = {
    AND?: RaidPointsScalarWhereInput | RaidPointsScalarWhereInput[]
    OR?: RaidPointsScalarWhereInput[]
    NOT?: RaidPointsScalarWhereInput | RaidPointsScalarWhereInput[]
    id?: IntFilter<"RaidPoints"> | number
    userId?: IntFilter<"RaidPoints"> | number
    raidId?: IntFilter<"RaidPoints"> | number
    points?: IntFilter<"RaidPoints"> | number
  }

  export type LootHistoryUpsertWithWhereUniqueWithoutRaidInput = {
    where: LootHistoryWhereUniqueInput
    update: XOR<LootHistoryUpdateWithoutRaidInput, LootHistoryUncheckedUpdateWithoutRaidInput>
    create: XOR<LootHistoryCreateWithoutRaidInput, LootHistoryUncheckedCreateWithoutRaidInput>
  }

  export type LootHistoryUpdateWithWhereUniqueWithoutRaidInput = {
    where: LootHistoryWhereUniqueInput
    data: XOR<LootHistoryUpdateWithoutRaidInput, LootHistoryUncheckedUpdateWithoutRaidInput>
  }

  export type LootHistoryUpdateManyWithWhereWithoutRaidInput = {
    where: LootHistoryScalarWhereInput
    data: XOR<LootHistoryUpdateManyMutationInput, LootHistoryUncheckedUpdateManyWithoutRaidInput>
  }

  export type RaidAttendanceUpsertWithWhereUniqueWithoutRaidInput = {
    where: RaidAttendanceWhereUniqueInput
    update: XOR<RaidAttendanceUpdateWithoutRaidInput, RaidAttendanceUncheckedUpdateWithoutRaidInput>
    create: XOR<RaidAttendanceCreateWithoutRaidInput, RaidAttendanceUncheckedCreateWithoutRaidInput>
  }

  export type RaidAttendanceUpdateWithWhereUniqueWithoutRaidInput = {
    where: RaidAttendanceWhereUniqueInput
    data: XOR<RaidAttendanceUpdateWithoutRaidInput, RaidAttendanceUncheckedUpdateWithoutRaidInput>
  }

  export type RaidAttendanceUpdateManyWithWhereWithoutRaidInput = {
    where: RaidAttendanceScalarWhereInput
    data: XOR<RaidAttendanceUpdateManyMutationInput, RaidAttendanceUncheckedUpdateManyWithoutRaidInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRaidInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRaidInput, UserUncheckedUpdateWithoutRaidInput>
    create: XOR<UserCreateWithoutRaidInput, UserUncheckedCreateWithoutRaidInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRaidInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRaidInput, UserUncheckedUpdateWithoutRaidInput>
  }

  export type UserUpdateManyWithWhereWithoutRaidInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRaidInput>
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutRaidInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutRaidInput, JoinRequestUncheckedUpdateWithoutRaidInput>
    create: XOR<JoinRequestCreateWithoutRaidInput, JoinRequestUncheckedCreateWithoutRaidInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutRaidInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutRaidInput, JoinRequestUncheckedUpdateWithoutRaidInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutRaidInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutRaidInput>
  }

  export type UserCreateWithoutJoinRequestsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutJoinRequestsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
  }

  export type RaidCreateWithoutJoinRequestsInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutJoinRequestsInput = {
    id?: number
    name: string
    createdById: number
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutJoinRequestsInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutJoinRequestsInput, RaidUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserUpsertWithoutJoinRequestsInput = {
    update: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateWithoutJoinRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaidUpsertWithoutJoinRequestsInput = {
    update: XOR<RaidUpdateWithoutJoinRequestsInput, RaidUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<RaidCreateWithoutJoinRequestsInput, RaidUncheckedCreateWithoutJoinRequestsInput>
    where?: RaidWhereInput
  }

  export type RaidUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: RaidWhereInput
    data: XOR<RaidUpdateWithoutJoinRequestsInput, RaidUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type RaidUpdateWithoutJoinRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutJoinRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type UserCreateWithoutRaidPointsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRaidPointsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRaidPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaidPointsInput, UserUncheckedCreateWithoutRaidPointsInput>
  }

  export type RaidCreateWithoutRaidPointsInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutRaidPointsInput = {
    id?: number
    name: string
    createdById: number
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutRaidPointsInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutRaidPointsInput, RaidUncheckedCreateWithoutRaidPointsInput>
  }

  export type UserUpsertWithoutRaidPointsInput = {
    update: XOR<UserUpdateWithoutRaidPointsInput, UserUncheckedUpdateWithoutRaidPointsInput>
    create: XOR<UserCreateWithoutRaidPointsInput, UserUncheckedCreateWithoutRaidPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaidPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaidPointsInput, UserUncheckedUpdateWithoutRaidPointsInput>
  }

  export type UserUpdateWithoutRaidPointsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRaidPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaidUpsertWithoutRaidPointsInput = {
    update: XOR<RaidUpdateWithoutRaidPointsInput, RaidUncheckedUpdateWithoutRaidPointsInput>
    create: XOR<RaidCreateWithoutRaidPointsInput, RaidUncheckedCreateWithoutRaidPointsInput>
    where?: RaidWhereInput
  }

  export type RaidUpdateToOneWithWhereWithoutRaidPointsInput = {
    where?: RaidWhereInput
    data: XOR<RaidUpdateWithoutRaidPointsInput, RaidUncheckedUpdateWithoutRaidPointsInput>
  }

  export type RaidUpdateWithoutRaidPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutRaidPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type UserCreateWithoutWishlistItemInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutWishlistItemInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishlistItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishlistItemInput, UserUncheckedCreateWithoutWishlistItemInput>
  }

  export type LootCreateWithoutWishlistItemInput = {
    name: string
    url: string
    boss: BossCreateNestedOneWithoutLootsInput
    users?: UserCreateNestedManyWithoutLootsInput
    LootHistory?: LootHistoryCreateNestedManyWithoutLootInput
  }

  export type LootUncheckedCreateWithoutWishlistItemInput = {
    id?: number
    name: string
    url: string
    bossId: number
    users?: UserUncheckedCreateNestedManyWithoutLootsInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutLootInput
  }

  export type LootCreateOrConnectWithoutWishlistItemInput = {
    where: LootWhereUniqueInput
    create: XOR<LootCreateWithoutWishlistItemInput, LootUncheckedCreateWithoutWishlistItemInput>
  }

  export type UserUpsertWithoutWishlistItemInput = {
    update: XOR<UserUpdateWithoutWishlistItemInput, UserUncheckedUpdateWithoutWishlistItemInput>
    create: XOR<UserCreateWithoutWishlistItemInput, UserUncheckedCreateWithoutWishlistItemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishlistItemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishlistItemInput, UserUncheckedUpdateWithoutWishlistItemInput>
  }

  export type UserUpdateWithoutWishlistItemInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutWishlistItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LootUpsertWithoutWishlistItemInput = {
    update: XOR<LootUpdateWithoutWishlistItemInput, LootUncheckedUpdateWithoutWishlistItemInput>
    create: XOR<LootCreateWithoutWishlistItemInput, LootUncheckedCreateWithoutWishlistItemInput>
    where?: LootWhereInput
  }

  export type LootUpdateToOneWithWhereWithoutWishlistItemInput = {
    where?: LootWhereInput
    data: XOR<LootUpdateWithoutWishlistItemInput, LootUncheckedUpdateWithoutWishlistItemInput>
  }

  export type LootUpdateWithoutWishlistItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutLootsNestedInput
    users?: UserUpdateManyWithoutLootsNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateWithoutWishlistItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutLootsNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutLootNestedInput
  }

  export type UserCreateWithoutLootHistoryInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLootHistoryInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLootHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLootHistoryInput, UserUncheckedCreateWithoutLootHistoryInput>
  }

  export type LootCreateWithoutLootHistoryInput = {
    name: string
    url: string
    boss: BossCreateNestedOneWithoutLootsInput
    users?: UserCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutLootInput
  }

  export type LootUncheckedCreateWithoutLootHistoryInput = {
    id?: number
    name: string
    url: string
    bossId: number
    users?: UserUncheckedCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutLootInput
  }

  export type LootCreateOrConnectWithoutLootHistoryInput = {
    where: LootWhereUniqueInput
    create: XOR<LootCreateWithoutLootHistoryInput, LootUncheckedCreateWithoutLootHistoryInput>
  }

  export type RaidCreateWithoutLootHistoryInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutLootHistoryInput = {
    id?: number
    name: string
    createdById: number
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutLootHistoryInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutLootHistoryInput, RaidUncheckedCreateWithoutLootHistoryInput>
  }

  export type UserUpsertWithoutLootHistoryInput = {
    update: XOR<UserUpdateWithoutLootHistoryInput, UserUncheckedUpdateWithoutLootHistoryInput>
    create: XOR<UserCreateWithoutLootHistoryInput, UserUncheckedCreateWithoutLootHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLootHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLootHistoryInput, UserUncheckedUpdateWithoutLootHistoryInput>
  }

  export type UserUpdateWithoutLootHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLootHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LootUpsertWithoutLootHistoryInput = {
    update: XOR<LootUpdateWithoutLootHistoryInput, LootUncheckedUpdateWithoutLootHistoryInput>
    create: XOR<LootCreateWithoutLootHistoryInput, LootUncheckedCreateWithoutLootHistoryInput>
    where?: LootWhereInput
  }

  export type LootUpdateToOneWithWhereWithoutLootHistoryInput = {
    where?: LootWhereInput
    data: XOR<LootUpdateWithoutLootHistoryInput, LootUncheckedUpdateWithoutLootHistoryInput>
  }

  export type LootUpdateWithoutLootHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutLootsNestedInput
    users?: UserUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateWithoutLootHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutLootNestedInput
  }

  export type RaidUpsertWithoutLootHistoryInput = {
    update: XOR<RaidUpdateWithoutLootHistoryInput, RaidUncheckedUpdateWithoutLootHistoryInput>
    create: XOR<RaidCreateWithoutLootHistoryInput, RaidUncheckedCreateWithoutLootHistoryInput>
    where?: RaidWhereInput
  }

  export type RaidUpdateToOneWithWhereWithoutLootHistoryInput = {
    where?: RaidWhereInput
    data: XOR<RaidUpdateWithoutLootHistoryInput, RaidUncheckedUpdateWithoutLootHistoryInput>
  }

  export type RaidUpdateWithoutLootHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutLootHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type UserCreateWithoutAttendancesInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    loots?: LootCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    loots?: LootUncheckedCreateNestedManyWithoutUsersInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type RaidCreateWithoutAttendancesInput = {
    name: string
    createdBy: UserCreateNestedOneWithoutCreatedRaidsInput
    RaidPoints?: RaidPointsCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryCreateNestedManyWithoutRaidInput
    users?: UserCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestCreateNestedManyWithoutRaidInput
  }

  export type RaidUncheckedCreateWithoutAttendancesInput = {
    id?: number
    name: string
    createdById: number
    RaidPoints?: RaidPointsUncheckedCreateNestedManyWithoutRaidInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutRaidInput
    users?: UserUncheckedCreateNestedManyWithoutRaidInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutRaidInput
  }

  export type RaidCreateOrConnectWithoutAttendancesInput = {
    where: RaidWhereUniqueInput
    create: XOR<RaidCreateWithoutAttendancesInput, RaidUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaidUpsertWithoutAttendancesInput = {
    update: XOR<RaidUpdateWithoutAttendancesInput, RaidUncheckedUpdateWithoutAttendancesInput>
    create: XOR<RaidCreateWithoutAttendancesInput, RaidUncheckedCreateWithoutAttendancesInput>
    where?: RaidWhereInput
  }

  export type RaidUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: RaidWhereInput
    data: XOR<RaidUpdateWithoutAttendancesInput, RaidUncheckedUpdateWithoutAttendancesInput>
  }

  export type RaidUpdateWithoutAttendancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedRaidsNestedInput
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type LootCreateWithoutBossInput = {
    name: string
    url: string
    users?: UserCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryCreateNestedManyWithoutLootInput
  }

  export type LootUncheckedCreateWithoutBossInput = {
    id?: number
    name: string
    url: string
    users?: UserUncheckedCreateNestedManyWithoutLootsInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutLootInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutLootInput
  }

  export type LootCreateOrConnectWithoutBossInput = {
    where: LootWhereUniqueInput
    create: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput>
  }

  export type LootCreateManyBossInputEnvelope = {
    data: LootCreateManyBossInput | LootCreateManyBossInput[]
    skipDuplicates?: boolean
  }

  export type LootUpsertWithWhereUniqueWithoutBossInput = {
    where: LootWhereUniqueInput
    update: XOR<LootUpdateWithoutBossInput, LootUncheckedUpdateWithoutBossInput>
    create: XOR<LootCreateWithoutBossInput, LootUncheckedCreateWithoutBossInput>
  }

  export type LootUpdateWithWhereUniqueWithoutBossInput = {
    where: LootWhereUniqueInput
    data: XOR<LootUpdateWithoutBossInput, LootUncheckedUpdateWithoutBossInput>
  }

  export type LootUpdateManyWithWhereWithoutBossInput = {
    where: LootScalarWhereInput
    data: XOR<LootUpdateManyMutationInput, LootUncheckedUpdateManyWithoutBossInput>
  }

  export type BossCreateWithoutLootsInput = {
    name: string
  }

  export type BossUncheckedCreateWithoutLootsInput = {
    id?: number
    name: string
  }

  export type BossCreateOrConnectWithoutLootsInput = {
    where: BossWhereUniqueInput
    create: XOR<BossCreateWithoutLootsInput, BossUncheckedCreateWithoutLootsInput>
  }

  export type UserCreateWithoutLootsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    raid?: RaidCreateNestedOneWithoutUsersInput
    createdRaids?: RaidCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    WishlistItem?: WishlistItemCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceCreateNestedManyWithoutUserInput
    classe: ClasseCreateNestedOneWithoutUsersInput
    specialisation: SpecialisationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLootsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
    createdRaids?: RaidUncheckedCreateNestedManyWithoutCreatedByInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    WishlistItem?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
    RaidPoints?: RaidPointsUncheckedCreateNestedOneWithoutUserInput
    LootHistory?: LootHistoryUncheckedCreateNestedManyWithoutUserInput
    attendances?: RaidAttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLootsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput>
  }

  export type WishlistItemCreateWithoutLootInput = {
    priority: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWishlistItemInput
  }

  export type WishlistItemUncheckedCreateWithoutLootInput = {
    id?: number
    userId: number
    priority: number
    createdAt?: Date | string
  }

  export type WishlistItemCreateOrConnectWithoutLootInput = {
    where: WishlistItemWhereUniqueInput
    create: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput>
  }

  export type WishlistItemCreateManyLootInputEnvelope = {
    data: WishlistItemCreateManyLootInput | WishlistItemCreateManyLootInput[]
    skipDuplicates?: boolean
  }

  export type LootHistoryCreateWithoutLootInput = {
    priority: number
    pointsCost: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLootHistoryInput
    raid: RaidCreateNestedOneWithoutLootHistoryInput
  }

  export type LootHistoryUncheckedCreateWithoutLootInput = {
    id?: number
    userId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type LootHistoryCreateOrConnectWithoutLootInput = {
    where: LootHistoryWhereUniqueInput
    create: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput>
  }

  export type LootHistoryCreateManyLootInputEnvelope = {
    data: LootHistoryCreateManyLootInput | LootHistoryCreateManyLootInput[]
    skipDuplicates?: boolean
  }

  export type BossUpsertWithoutLootsInput = {
    update: XOR<BossUpdateWithoutLootsInput, BossUncheckedUpdateWithoutLootsInput>
    create: XOR<BossCreateWithoutLootsInput, BossUncheckedCreateWithoutLootsInput>
    where?: BossWhereInput
  }

  export type BossUpdateToOneWithWhereWithoutLootsInput = {
    where?: BossWhereInput
    data: XOR<BossUpdateWithoutLootsInput, BossUncheckedUpdateWithoutLootsInput>
  }

  export type BossUpdateWithoutLootsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BossUncheckedUpdateWithoutLootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutLootsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLootsInput, UserUncheckedUpdateWithoutLootsInput>
    create: XOR<UserCreateWithoutLootsInput, UserUncheckedCreateWithoutLootsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLootsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLootsInput, UserUncheckedUpdateWithoutLootsInput>
  }

  export type UserUpdateManyWithWhereWithoutLootsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLootsInput>
  }

  export type WishlistItemUpsertWithWhereUniqueWithoutLootInput = {
    where: WishlistItemWhereUniqueInput
    update: XOR<WishlistItemUpdateWithoutLootInput, WishlistItemUncheckedUpdateWithoutLootInput>
    create: XOR<WishlistItemCreateWithoutLootInput, WishlistItemUncheckedCreateWithoutLootInput>
  }

  export type WishlistItemUpdateWithWhereUniqueWithoutLootInput = {
    where: WishlistItemWhereUniqueInput
    data: XOR<WishlistItemUpdateWithoutLootInput, WishlistItemUncheckedUpdateWithoutLootInput>
  }

  export type WishlistItemUpdateManyWithWhereWithoutLootInput = {
    where: WishlistItemScalarWhereInput
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyWithoutLootInput>
  }

  export type LootHistoryUpsertWithWhereUniqueWithoutLootInput = {
    where: LootHistoryWhereUniqueInput
    update: XOR<LootHistoryUpdateWithoutLootInput, LootHistoryUncheckedUpdateWithoutLootInput>
    create: XOR<LootHistoryCreateWithoutLootInput, LootHistoryUncheckedCreateWithoutLootInput>
  }

  export type LootHistoryUpdateWithWhereUniqueWithoutLootInput = {
    where: LootHistoryWhereUniqueInput
    data: XOR<LootHistoryUpdateWithoutLootInput, LootHistoryUncheckedUpdateWithoutLootInput>
  }

  export type LootHistoryUpdateManyWithWhereWithoutLootInput = {
    where: LootHistoryScalarWhereInput
    data: XOR<LootHistoryUpdateManyMutationInput, LootHistoryUncheckedUpdateManyWithoutLootInput>
  }

  export type RaidCreateManyCreatedByInput = {
    id?: number
    name: string
  }

  export type JoinRequestCreateManyUserInput = {
    id?: number
    raidId: number
    status?: string
    createdAt?: Date | string
  }

  export type WishlistItemCreateManyUserInput = {
    id?: number
    lootId: number
    priority: number
    createdAt?: Date | string
  }

  export type LootHistoryCreateManyUserInput = {
    id?: number
    lootId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type RaidAttendanceCreateManyUserInput = {
    id?: number
    raidId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type RaidUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    RaidPoints?: RaidPointsUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutRaidNestedInput
    users?: UserUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    RaidPoints?: RaidPointsUncheckedUpdateManyWithoutRaidNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutRaidNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutRaidNestedInput
    users?: UserUncheckedUpdateManyWithoutRaidNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutRaidNestedInput
  }

  export type RaidUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type JoinRequestUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutLootsNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    bossId?: IntFieldUpdateOperationsInput | number
  }

  export type WishlistItemUpdateWithoutUserInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loot?: LootUpdateOneRequiredWithoutWishlistItemNestedInput
  }

  export type WishlistItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUpdateWithoutUserInput = {
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loot?: LootUpdateOneRequiredWithoutLootHistoryNestedInput
    raid?: RaidUpdateOneRequiredWithoutLootHistoryNestedInput
  }

  export type LootHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceUpdateWithoutUserInput = {
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type RaidAttendanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialisationCreateManyClasseInput = {
    id?: number
    name: string
  }

  export type UserCreateManyClasseInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    specialisationId: number
    raidId?: number | null
    createdAt?: Date | string
  }

  export type SpecialisationUpdateWithoutClasseInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutSpecialisationNestedInput
  }

  export type SpecialisationUncheckedUpdateWithoutClasseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutSpecialisationNestedInput
  }

  export type SpecialisationUncheckedUpdateManyWithoutClasseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutClasseInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutClasseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClasseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManySpecialisationInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    raidId?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutSpecialisationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecialisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSpecialisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidPointsCreateManyRaidInput = {
    id?: number
    userId: number
    points?: number
  }

  export type LootHistoryCreateManyRaidInput = {
    id?: number
    userId: number
    lootId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type RaidAttendanceCreateManyRaidInput = {
    id?: number
    userId: number
    pointsGiven?: number
    createdAt?: Date | string
  }

  export type UserCreateManyRaidInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    classeId: number
    specialisationId: number
    createdAt?: Date | string
  }

  export type JoinRequestCreateManyRaidInput = {
    id?: number
    userId: number
    status?: string
    createdAt?: Date | string
  }

  export type RaidPointsUpdateWithoutRaidInput = {
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRaidPointsNestedInput
  }

  export type RaidPointsUncheckedUpdateWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RaidPointsUncheckedUpdateManyWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type LootHistoryUpdateWithoutRaidInput = {
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLootHistoryNestedInput
    loot?: LootUpdateOneRequiredWithoutLootHistoryNestedInput
  }

  export type LootHistoryUncheckedUpdateWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUncheckedUpdateManyWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lootId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceUpdateWithoutRaidInput = {
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type RaidAttendanceUncheckedUpdateWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidAttendanceUncheckedUpdateManyWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pointsGiven?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRaidInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    loots?: LootUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    loots?: LootUncheckedUpdateManyWithoutUsersNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUpdateWithoutRaidInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutRaidInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootCreateManyBossInput = {
    id?: number
    name: string
    url: string
  }

  export type LootUpdateWithoutBossInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateWithoutBossInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLootsNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutLootNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutLootNestedInput
  }

  export type LootUncheckedUpdateManyWithoutBossInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WishlistItemCreateManyLootInput = {
    id?: number
    userId: number
    priority: number
    createdAt?: Date | string
  }

  export type LootHistoryCreateManyLootInput = {
    id?: number
    userId: number
    raidId: number
    priority: number
    pointsCost: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutLootsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raid?: RaidUpdateOneWithoutUsersNestedInput
    createdRaids?: RaidUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    WishlistItem?: WishlistItemUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUpdateManyWithoutUserNestedInput
    classe?: ClasseUpdateOneRequiredWithoutUsersNestedInput
    specialisation?: SpecialisationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRaids?: RaidUncheckedUpdateManyWithoutCreatedByNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    WishlistItem?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
    RaidPoints?: RaidPointsUncheckedUpdateOneWithoutUserNestedInput
    LootHistory?: LootHistoryUncheckedUpdateManyWithoutUserNestedInput
    attendances?: RaidAttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    classeId?: IntFieldUpdateOperationsInput | number
    specialisationId?: IntFieldUpdateOperationsInput | number
    raidId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUpdateWithoutLootInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishlistItemNestedInput
  }

  export type WishlistItemUncheckedUpdateWithoutLootInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyWithoutLootInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUpdateWithoutLootInput = {
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLootHistoryNestedInput
    raid?: RaidUpdateOneRequiredWithoutLootHistoryNestedInput
  }

  export type LootHistoryUncheckedUpdateWithoutLootInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LootHistoryUncheckedUpdateManyWithoutLootInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raidId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    pointsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}