export default class RangeList {

    constructor() {
        this.ranges = []
    }

    /**
      * Adds a range to the list
      * @param {Array<number>} range - Array of two integers that specify
      beginning and end of range.
      */
    add(range) {
        // TODO: implement this
        if (this.ranges.length === 0) {
            this.ranges.push(range)
            return
        }

        this.ranges.push(range)
        while (this.mergeRange(this.ranges)) {
        }

    }

    /**
     * merge range
     * @param {Array<Array>} ranges the ranges
     * @returns any merged
     * 
     */
    mergeRange(ranges) {
        ranges.sort(function (a, b) { return a[0] - b[0] })
        for (let i = 0; i < ranges.length - 1; i++) {
            const rangeA = ranges[i];
            const rangeB = ranges[i + 1];
            const res = this.merge(rangeA, rangeB)
            if (res != null) {
                rangeA[0] = res[0]
                rangeA[1] = res[1]
                ranges.splice(i + 1, 1)
                return true
            }
        }
        return false
    }


    /**
     * merge two range or not
     * @param {Array} rangeA 
     * @param {Array} rangeB
     * @returns merged range or null(not merge)
     */
    merge(rangeA, rangeB) {
        const aStart = rangeA[0]
        const aEnd = rangeA[1]
        const bStart = rangeB[0]
        const bEnd = rangeB[1]
        if (bEnd < aStart || aEnd < bStart) {
            //not intersect
            return null
        }
        //merge to range
        return [Math.min(aStart, bStart), Math.max(aEnd, bEnd)]
    }


    /**
      * Removes a range from the list
      * @param {Array<number>} range - Array of two integers that specify
      beginning and end of range.
      */
    remove(range) {
        // TODO: implement this
        for (let i = 0; i < this.ranges.length; i++) {
            const curRange = this.ranges[i];
            const cuts = this.cut(curRange, range)
            if (cuts != null) {
                //cuted
                this.ranges.splice(i, 1)
                for (let j = 0; j < cuts.length; j++) {
                    this.ranges.push(cuts[j])
                }
            }
        }
        //merge cut piece
        while (this.mergeRange(this.ranges)) {
        }
    }


    /**
     * cut range into pices
     * @returns null if not cut,   or cut arrays
     */
    cut(range, cut) {
        const start = range[0]
        const end = range[1]
        const cutStart = cut[0]
        const cutEnd = cut[1]
        if (cutEnd < start || end < cutStart) {
            //not intersect, nothing cuted
            return null
        }
        if (cutStart > start && cutEnd < end) {
            //cut into two piece
            return [[start, cutStart], [cutEnd, end]]
        }
        //cut into one piece
        if (cutStart <= start) {
            return [[cutEnd, end]]
        } else {
            return [[start, cutStart]]
        }
    }


    /**
      * Prints out the list of ranges in the range list
      */
    print() {
        // TODO: implement this
        //console.log(JSON.stringify(this.ranges))
        console.log(this.ranges.map((it) => { return `[${it[0]}, ${it[1]})` }).join(" "))
    }
}
