/*
 * Declare module "lokalise-to-default-messages" {
 *   export function lokalise(config: lokaliseConfig): Promise<ReplaceResult[]>;
 *   export function lokalise(
 *     config: lokaliseConfig,
 *     cb: (error: Error, results: ReplaceResult[]) => void
 *   ): void;
 *   export default lokalise;
 */

/*
 *   Namespace lokalise {
 *     export function sync(config: lokaliseConfig): ReplaceResult[];
 *     export function lokaliseSync(config: lokaliseConfig): ReplaceResult[];
 *     export function lokalise(config: lokaliseConfig): Promise<ReplaceResult[]>;
 *     export function lokalise(
 *       config: lokaliseConfig,
 *       Cb: (error: Error, results: ReplaceResult[]) => void
 *     ): void;
 *   }
 */

/*
 *   Export function sync(config: lokaliseConfig): ReplaceResult[];
 *   export function lokaliseSync(config: lokaliseConfig): ReplaceResult[];
 */

/*
 *   Export type From = string | RegExp | FromCallback;
 *   export type To = string | ToCallback;
 */

/*
 *   Export interface lokaliseConfig {
 *     files: string | string[];
 *     ignore?: string | string[];
 *     from: From | Array<From>;
 *     to: To | Array<To>;
 *     countMatches?: boolean;
 *     allowEmptyPaths?: boolean;
 *     disableGlobs?: boolean;
 *     encoding?: string;
 *     dry?: boolean;
 *     glob?: object;
 *   }
 */

/*
 *   Export interface ReplaceResult {
 *     file: string;
 *     hasChanged: boolean;
 *     numMatches?: number;
 *     numReplacements?: number;
 *   }
 * }
 */

/*
 * Type FromCallback = (file: string) => string | RegExp | string[] | RegExp[];
 * type ToCallback = (match: string, file: string) => string | string[];
 */
