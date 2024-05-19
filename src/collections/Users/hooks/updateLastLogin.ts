import { CollectionAfterLoginHook } from 'payload/types'

const updateLastLogin: CollectionAfterLoginHook = async ({
    req, // full express request
    user, // user that was logged in
}) => {
    try {
        const now = new Date()
        await req.payload.update({
            id: user.id,
            collection: 'users',
            data: {
                lastLogin: now.toISOString(),
            },
            req,
        })
    } catch (err: unknown) {
        req.payload.logger.error(
            `Error recording last login for user ${user.id}: ${err}`,
        )
    }

    return user
}

export default updateLastLogin
